import React from 'react';
import SEO from '../common/seo';
import Update from '../components/Course-update';
import WrapperFour from '../layout/wrapper-4';

const index = () => {
    return (
        <WrapperFour>
            <SEO pageTitle={"Course-update"} />
            <Update />
        </WrapperFour>
    );
};

export default index;