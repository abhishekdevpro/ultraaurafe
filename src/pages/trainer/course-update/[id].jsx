import SEO from "@/src/common/seo";
import WrapperFour from "@/src/layout/wrapper-4";
import Update from "../../../components/Course-update";
const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Course-update"} />
      <Update />
    </WrapperFour>
  );
};

export default index;
