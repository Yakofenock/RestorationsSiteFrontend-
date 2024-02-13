import React, { FC, useEffect, useState } from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import Header from "../parts_share/Header";
import CurrentPath from "../parts/CurrentPath";
import useFetch from "../../hooks_and_utils/useFetch";
import { RestoreAPI } from "../../api";
import LoadingPopUp from "../popups/LoadingPopUp";
import imgPlaceholder from "../../hooks_and_utils/imgPlaceholder";
import percent from "../../hooks_and_utils/countPercent";
import {RestorationType, DonationType, WorkType} from "../../interfaces";
import MOCK from "../../MOCK";


const Restoration: FC = () => {
    const { restore_id } = useParams();
    const restoreId = parseInt(restore_id, 10);

    const [restoration, setRestoration] = useState<RestorationType|any>({});
    const [loadingShown, setLoadingShown] = useState<boolean>(false);

    const callback = (data: any) => {
        setRestoration(data);
        setLoadingShown(false);
    };

    const { data, loading, error, doFetch } = useFetch(
        `${RestoreAPI}restorations/${restoreId}/`,
        { method: 'GET' },
        callback
    );

    useEffect(() => {
        doFetch();
    }, []);

    // Popup logic:
    const handleClose = () => (loading ? undefined : setLoadingShown(false));

    useEffect(() => {
        if (loading || error) setLoadingShown(true);
        if (error) setRestoration(MOCK.restorations_list.find((obj: any) => obj.id === restoreId));
    }, [loading, error]);

        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-9">
                        <div className="detail-description">
                            <h2>{restoration.name}</h2>
                            <img className="img-fluid mt-3 mb-3"
                                 src={restoration.image}
                                 onError={e => imgPlaceholder(e)}/>
                            <div className="description-text">
                                <h4 className="mt-3">Описание</h4>
                                <p>{restoration.description}</p>
                            </div>
                            <h4 className="d-flex justify-content-between mt-3">
                                Собрано: {percent(restoration.given_sum, restoration.total_sum)}%,
                                &nbsp;
                                {restoration.given_sum} / {restoration.total_sum} ₽
                                <Link className="btn btn-primary" to="/catalog">Назад</Link>
                            </h4>
                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table table-bordered">
                                <thead className="main-color text-white">
                                <tr>
                                    <th>Название работы</th>
                                    <th>Собрано, ₽</th>
                                    <th>Требуется, ₽</th>
                                    <th className="text-center">Доля, %</th>
                                    <th className="text-center">Статус</th>
                                    <th className="text-center">Пожертвовать</th>
                                </tr>
                                </thead>
                                <tbody>
                                {restoration.works && restoration.works.map((work) => (
                                    <tr key={work.id}>
                                        <td>{work.name}</td>
                                        <td>{work.given_sum}</td>
                                        <td>{work.total_sum}</td>
                                        <td className="text-center">{percent(work.given_sum, work.total_sum)}</td>
                                        <td className="text-center">{work.status}</td>
                                        <td className="text-center">
                                            <button className="btn btn-success">Да</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>





                            </table>
                        </div>
                        <div className="table-responsive mt-4">
                            <table className="table table-bordered">
                                <thead className="main-color text-white">
                                <tr>
                                    <th className="text-center">Имя</th>
                                    <th>Работа</th>
                                    <th>Донат, ₽</th>
                                    <th className="text-center">Доля, %</th>
                                    <th className="text-center">Всего доля, ₽</th>
                                    <th className="text-center">Всего, %</th>
                                </tr>
                                </thead>
                                <tbody>
                                {restoration.donaters && restoration.donaters.map((donation: DonationType) => (
                                    <tr key={donation.id}>
                                        <td>{donation.name}</td>
                                        <td>{donation.given_sum}</td>
                                        <td>{donation.total_sum}</td>
                                        <td className="text-center">{donation.percent}</td>
                                        <td className="text-center">
                                            <button className="btn btn-success">Да</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
};


export default Restoration;
