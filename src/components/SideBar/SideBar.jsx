import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCategorys } from '../../store/actions';
import { NavLink } from 'react-router-dom';
import './index.scss';

const Header = ({categorys, getCategorys}) => {
    useEffect(() => {
        getCategorys()
    }, [getCategorys])
    return ( 
    <div className="header">
        <h2 className="header-title">
            <NavLink to={`/`}>Cats</NavLink>
        </h2>
        <ul className="header-list">
            {categorys.map((category) => {
                    return (
                        <li className="header-list_item" key={category.id}>
                            <NavLink  to={`/${category.name}`}>{category.name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
        
    </div>
    )
}

const mapStateToProps = (store) => {
    return {
      categorys: store.categorys
    }
}
  
const mapDispatchToProps = {
    getCategorys
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);