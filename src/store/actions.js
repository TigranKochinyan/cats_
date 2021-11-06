export const getCategorys = () => {
    return (dispatch) => {
        fetch('https://api.thecatapi.com/v1/categories')
            .then(res => {
                return res.json()
            })
            .then(categorys => {
                dispatch({type: 'GET_CATEGORYS', categorys })
            })
            .catch(error => {
                dispatch({type: 'GET_CATEGORYS', categorys: [] })
            })
    }
}

export const getCatsImages = (categoryId = '', page = 0 ) => {
    return (dispatch) => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=0&category_ids=${categoryId}&page=${page}`) 
            .then(res => {
                return res.json()
            })
            .then(cats => {
                dispatch({type: 'CHNAGE_CATEGORY', cats, id: categoryId})
            })
            .catch(error => {
                dispatch({type: 'CHNAGE_CATEGORY', cats: [], id: categoryId })
            })
    }
}

export const loadMoreImages = (categoryId = '', page ) => {
    return (dispatch) => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${categoryId}&page=${page}`) 
            .then(res => {
                return res.json()
            })
            .then(cats => {
                dispatch({type: 'LOAD_MORE', cats, id: categoryId})
            })
            .catch(error => {
                dispatch({type: 'LOAD_MORE', cats: [], id: categoryId })
            })
    }
}

export const showLess = (count = 10) => {
    return (dispatch) => {
        dispatch({type: 'SHOW_LESS', count})
    }
}