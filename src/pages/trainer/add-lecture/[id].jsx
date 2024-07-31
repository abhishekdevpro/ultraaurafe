import SEO from "@/src/common/seo";
import SidebarLayout from "@/src/common/sidebar-layout";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import Lecture from "@/src/components/lecture/lecture";
import WrapperFour from "@/src/layout/wrapper-4";
import React from "react";

const AddLecture = () => {
  return (
    <WrapperFour>
      <Breadcrumb title="Leacture" isDbbl="Leacture" subtitle="Leacture" />

      <SidebarLayout>
        <main className="col-sm-10 p-0">
          <section
            className="course-list-area pb-120 wow fadeInUp"
            data-wow-duration=".8s"
            data-wow-delay=".2s"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <Lecture />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </SidebarLayout>
    </WrapperFour>
  );
};

export default AddLecture;
