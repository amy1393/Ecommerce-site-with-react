import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageURL: 'https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageURL: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageURL: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    id: 3
                },
                {
                    title: 'womens',
                    imageURL: 'https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    imageURL: 'https://images.pexels.com/photos/1384218/pexels-photo-1384218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    size: 'large',
                    id: 5
                },
            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>

                {
                    this.state.sections.map(({title,imageURL,id,size})=>(
                        <MenuItem key = {id} title = {title} imageURL = {imageURL} size = {size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;