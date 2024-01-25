import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductId } from '../../../api/asyncMock'
import ItemDetail from '../itemDetail/ItemDetail'

function ItemDetailContainer() {
    const [product, setProduct] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        getProductId(itemId)
            .then(response => {
                setProduct(response)
            }).catch(error => { console.log(error) })
    }, [itemId])


    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer