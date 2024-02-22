import React, {FC, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import Header from "../parts_share/Header";
import CurrentPath from "../parts/CurrentPath";
import CatalogCard from '../parts/CatalogCard.tsx';
import {Col, NavDropdown, Row} from "react-bootstrap";
import useFetch from "../../hooks_and_utils/useFetch";
import {RestoreAPI} from "../../api";
import {
    useIsAuthenticated,
    useIsStaff,
    storeDraftId,
    useRestorations,
    storeRestorations,
    useRefreshView,
    storeRefreshView, useSearchValue,
} from "../../redux/dataSlice";
import LoadingPopUp from "../popups/LoadingPopUp";
import catalogFilter from "../../hooks_and_utils/catalogFilters"
import Payments from "./Payments";
import Basket from "./Basket";
import {RestorationType} from "../../interfaces";


const Catalog: FC = () => {
    Payments({fetchBrake: !useIsAuthenticated(), pollingBrake: true});
    Basket({fetchBrake: !useIsStaff()});

    const isStaff = useIsStaff();

    const storedRestorations: RestorationType[] = Object.values(useRestorations()); // To store data
    const dispatch: Function = useDispatch();

    const refreshView: boolean = useRefreshView();
    const searchValue: string = useSearchValue();
    const [statusFilter, setStatusFilter]  =useState(["", ""]);

    const [restorations, setRestorations] = useState<RestorationType[]>(storedRestorations); //To display with search
    const [loadingShown, setLoadingShown] = useState<boolean>(false);

    // Fetch (for downloading restorations and search) logic:
    const callback = (data: {draft_id: boolean, restorations_list: RestorationType[]}) => {
        dispatch(storeDraftId(data.draft_id));
        dispatch(storeRestorations(data.restorations_list));
        setRestorations(data.restorations_list);
        setLoadingShown(false);
    };

    const {data, loading, error, doFetch} = useFetch(
        RestoreAPI + `restorations/?search=${searchValue}&filter=${statusFilter[1]}`,
        {method: 'GET'},
        callback
    );

    useEffect(() => {
        if ((!restorations.length) || refreshView) {
            doFetch();
            dispatch(storeRefreshView(false));
        }
    }, [refreshView]);

    // Filters handling:
    const localFilter = (kostil=null) =>
        setRestorations(catalogFilter(storedRestorations, searchValue, kostil ? kostil[1] : statusFilter[1]));


    const handeSearch = (kostil=null) =>
        searchValue ? doFetch() : localFilter(kostil);


    const changeFilter = pair => {
        setStatusFilter(pair);
        handeSearch(pair);
    }

    // Popup and mock applying filtering logic:
    const handleClose = () =>
        loading ? undefined : setLoadingShown(false);

    useEffect(() => {
        if (loading || error) setLoadingShown(true);
        if (error) localFilter();
    }, [loading, error]);

    return (
        <div className="wrapper clear">
            <LoadingPopUp show={loadingShown} error={error} onClose={handleClose} message={'Идет загрузка...'}/>
            <Header doSearch={handeSearch}/>
            <CurrentPath links={[['Главная', '/info'], ['Каталог', '/catalog']]}/>
            <div className="container pt-md-3 pl-md-5 pr-md-5">
                {isStaff &&
                <NavDropdown
                    title={statusFilter[0] ? statusFilter[0] : "Сортировать по статусу"}
                    className="d-flex justify-content-between items-align-center mb-4 "
                >
                    <NavDropdown.Item onClick={() => changeFilter(["", ""])}>
                        все
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        onClick={() => changeFilter(["Формирующиеся", "Forming" ])}
                    >
                        формирующиеся
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        onClick={() => changeFilter(["В процессе", "InProcess"])}
                    >
                        в процессе
                    </NavDropdown.Item>
                    <NavDropdown.Item
                        onClick={() => changeFilter(["Завершенные", "Completed"])}
                    >
                        завершенные
                    </NavDropdown.Item>
                </NavDropdown>
                }
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
    );
};

export default Catalog;
