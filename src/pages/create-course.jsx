import React from 'react';
import SEO from '../common/seo';
import Create from '../components/Create-course';
import WrapperFour from '../layout/wrapper-4';

const index = () => {
    return (
        <WrapperFour>
            <SEO pageTitle={"Create course"} />
            <Create />
        </WrapperFour>
    );
};

export default index;