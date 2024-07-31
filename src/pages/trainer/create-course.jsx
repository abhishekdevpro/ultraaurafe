import React from 'react';

import Create from '../../components/Create-course';
import WrapperFour from '@/src/layout/wrapper-4';
import SEO from '@/src/common/seo';


const index = () => {
    return (
        <WrapperFour>
            <SEO pageTitle={"Create course"} />
            <Create />
        </WrapperFour>
    );
};

export default index;