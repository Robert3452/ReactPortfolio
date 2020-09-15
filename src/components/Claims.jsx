import React from 'react';
import { connect } from 'react-redux'
import PreDesc from '../components/childrens/PreDesc';
import ClaimItem from './childrens/ClaimItem';



const Claims = (props) => {
    const { preDesc, claims } = props;
    return (

        <section className="claims">
            <div className="container">
                {preDesc && <PreDesc {...preDesc[1]} />}
                <div className="claims-grid">
                    {claims && claims.map(claim => (
                        <ClaimItem key={claim._id} {...claim} />
                    ))}
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        claims: state.claims.data,
        preDesc: state.preDesc.data,
    }
}

export default connect(mapStateToProps)(Claims);