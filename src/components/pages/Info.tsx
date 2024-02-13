import React, { FC, useState } from "react";
import Header from "../parts_share/Header";
import CurrentPath from "../parts/CurrentPath";

const Info: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(false);

    return (
        <div className="wrapper clear">
            <Header />
            <CurrentPath links={[['Главная', '/info']]}/>
            <div className="container mt-4">
                <p className="lead text-center d-none d-md-block">
                    Сайт сбора средств на осуществление реставрационных
                    работ культурных объектов России
                </p>
                <p className="lead text-center">Проект Заграничного Якова Дмитриевича, РТ5-51Б</p>
                <hr className="my-4"/>
                <div className="row justify-content-center text-center">
                    <div className="col-6 col-md-4 col-lg-3">
                        <div className="m-10">
                            <div className="d-flex flex-column align-items-center">
                                <a className="btn btn-primary btn-block mb-3"
                                   href="#/catalog">Каталог</a>
                                <button className="btn btn-primary btn-block mb-3" onClick={() => setIsAuthenticated(!isAuthenticated)}>
                                    {isAuthenticated ? 'Выйти' : 'Авторизоваться'}
                                </button>
                                {isAuthenticated && <>
                                    <a className="btn btn-primary btn-block mb-3">Черновик заявки</a>
                                    <a className="btn btn-primary btn-block">История заявок</a>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
