import React, {FC, useEffect, useState} from "react";
import Header from "../parts_share/Header";
import CurrentPath from "../parts/CurrentPath";
import CatalogCard from '../parts/CatalogCard.tsx';
import {Col, Row, Button, NavDropdown} from "react-bootstrap";
import useFetch from "../../hooks_and_utils/useFetch";
import {RestoreAPI} from "../../api";
import LoadingPopUp from "../popups/LoadingPopUp";
import MOCK from "../../MOCK";
import catalogFilter from "../../hooks_and_utils/catalogFilters"


const Catalog: FC = () => {
    const [restorations, setRestorations] = useState<any[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');

    const [loadingShown, setLoadingShown] = useState<boolean>(false);

    // Fetch (for downloading restorations and search) logic:
    const callback = (data: any) => {
        setRestorations(data.restorations_list);
        setLoadingShown(false);
    };

    const {data, loading, error, doFetch} = useFetch(
        RestoreAPI + `restorations/?search=${searchValue}`,
        {method: 'GET'},
        callback
    );

    useEffect(() => {
        doFetch();
    }, []);

    const handeSearch = seach => {
        setSearchValue(seach);
        doFetch();
    }

    // Popup and mock filtering logic:
    const handleClose = () =>
        loading ? undefined : setLoadingShown(false);

    useEffect(() => {
        if (loading || error) setLoadingShown(true);
        if (error) {
            setRestorations(catalogFilter(MOCK.restorations_list, searchValue));
        }
    }, [loading, error]);

    return (
        <div className="wrapper clear">
            <LoadingPopUp show={loadingShown} error={error} onClose={handleClose} message={'Идет загрузка...'}/>
            <Header doSearch={handeSearch}/>
            <CurrentPath links={[['Главная', '/info'], ['Каталог', '/catalog']]}/>
            <div className="container pt-md-3 pl-md-5 pr-md-5">
                <div className="row g-4 justify-content-center">
                    {!restorations.length ? <h1>Каталог пуст..</h1> :
                        <Row xs={1} sm={2}  md={3} lg={4} className=" g-4 justify-content-center">
                            {restorations.map(
                                (restoration, index) => (
                                    <Col className="d-flex justify-content-center"  key={index}>
                                        <CatalogCard {...restoration} />
                                    </Col>
                                )
                            )}
                        </Row>
                    }
                </div>
            </div>
        </div>
    );
};

export default Catalog;
