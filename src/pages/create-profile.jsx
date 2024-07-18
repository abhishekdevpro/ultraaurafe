import React from 'react';
import SEO from '../common/seo';
import Create from '../components/Create-profile';
import WrapperFour from '../layout/wrapper-4';

const index = () => {
    return (
        <WrapperFour>
            <SEO pageTitle={"Create Profile"} />
            <Create />
        </WrapperFour>
    );
};

export default index;