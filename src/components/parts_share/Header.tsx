import React, {FC, useState} from 'react';


interface HeaderProps {
    doSearch?: (query: string) => void;
}

const Header:FC <HeaderProps> = ({doSearch}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(false);
    const [search, setSearch] = useState('');

    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-light navbar-sm justify-content-center justify-content-sm-start main-color">
            <div className="navbar-brand d-flex flex-wrap flex-sm-nowrap text-center align-items-center">
                <img className="logo" src={process.env.PUBLIC_URL + "/src/site_logo.png"} alt="Site Logo"/>
                <span className="site-title">Donations for Restorations</span>
            </div>

            {/* Поиск */}
            <div className="form-inline flex-nowrap">
                <input className="form-control search" value={search} placeholder="Search..."
                       onChange={e => setSearch(e.target.value)}/>
                <button className="btn btn-outline-light search-button ml-2 mr-2"
                        onClick={() => doSearch ? doSearch(search): ''}>Search</button>
            </div>

            {/* Hamburger Menu */}
            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    className="navbar-toggler ml-auto btn-light">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarSupportedContent" className="navbar-collapse text-right collapse">
                <div className="btn-group ml-auto hamburger-hidden">
                    <a className="btn btn-outline-light hamburger-first"
                       href="#/info">Главная</a>
                    <a className="btn btn-outline-light"
                       href="#/catalog">Каталог</a>
                    <div className="btn-group">
                        <button type="button" data-toggle="dropdown"
                                className="btn btn-light dropdown-toggle hamburger-last">Профиль</button>
                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-end">
                            {isAuthenticated && <>
                                <button className="dropdown-item">Корзина</button>
                                <button className="dropdown-item">Заказы</button>
                            </>}
                            <button onClick={() => setIsAuthenticated(!isAuthenticated)} className="dropdown-item">
                                {isAuthenticated ? 'Выход' : 'Вход'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;


//
// console.log(document.cookie)
// const options = {
//     method: 'POST',
//     withCredentials: true,
//     credentials: 'include',
//
//     headers: {
//         'Content-Type': 'application/json',
//         'X-CSRFToken': Cookies.get('csrftoken')
//     },
// };
//
//
//
//
// fetch(`http://127.0.0.1:8000/profiles_api/v1/logout/`, options)
//     .then(data => {
//         if (data.ok) {
//
//             localStorage.clear();
//             console.log('Successfully logged out');
//             navigate('/catalog');
//         }
//     })
//     .catch(err => console.error(err));


//
//
// ProfilesAPI.post('logout/', {})
//     .then(response => {
//         dispatch(setIsAuthenticatedAction(false));
//         dispatch(setIsStaffAction(false));
//         dispatch(delSumAction());
//         dispatch(delDrawAction());
//         dispatch(delPaymentSoftAction());
//         localStorage.clear();
//         console.log('Successfully logged out');
//         navigate('/catalog');
//     })
//     .catch(error => console.error('Not logged out error:', error));
