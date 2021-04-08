import React from 'react';

    class Child extends React.Component{
        render(){
            return(
                <>
                {this.props.commentList.map((el) => <li>{el.text}</li>)}
                </>
            )
        }
    }
export default Child;