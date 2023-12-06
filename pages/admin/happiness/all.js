import Link from "next/link";
import { ProgressBar, Col, Row, Card, Table, Image } from "react-bootstrap";

const ActiveProjectsData = [
  {
    id: 1,
    title: "Flower show",
    mobile: "9523457800",
    email: "sampleEmail@gmail.com",
    address: "user Address",
    // Date: "3 May, 2023",
    // staus: "Medium",
    brandLogo: "/images/brand/dropbox-logo.svg",
    priorityBadgeBg: "danger",
    Description:
      "Renowned music bands to make the festival nights musical and thrill the hearts of the revelers",
  },
  {
    id: 2,
    title: "Amusement park",
    mobile: "9523457800",
    email: "sampleEmail@gmail.com",
    address: "user Address",
    Date: "3 May, 2023",
    staus: "Medium",
    brandLogo: "/images/brand/dropbox-logo.svg",
    priorityBadgeBg: "warning",
    Description:
      "Renowned music bands to make the festival nights musical and thrill the hearts of the revelers",
  },
];

function Happiness() {
  return (
    <>
      <Col lg={12} md={12} xs={12} className="mt-6">
        {/* Page header */}
        <div>
          <div className="d-flex justify-content-between align-items-center p-4">
            <div className="mb-2 mb-lg-0">
              <h3 className="mb-0  text-dark">Happiness</h3>
            </div>
            <div>
              <Link href="/admin/happiness/new" className="btn btn-white">
                Create New Happiness
              </Link>
            </div>
          </div>
        </div>
      </Col>

      <Row className="mt-6 p-2">
        <Col md={12} xs={12}>
          <Card>
            <Card.Header className="bg-white  py-4">
              <h4 className="mb-0">Happiness</h4>
            </Card.Header>
            <Table responsive className="text-nowrap mb-0">
              <thead className="table-light">
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {ActiveProjectsData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="align-middle">
                        <div className="d-flex align-items-center">
                          <div>
                            <div
                              className={`icon-shape icon-md border p-4 rounded-1 ${item.brandLogoBg}`}
                            >
                              <Image src={item.brandLogo} alt="" />
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="align-middle">
                        <div className="d-flex align-items-start">
                          <div className="ms-3 lh-1">
                            <h5 className=" mb-1">
                              <Link href="#" className="text-inherit">
                                {item.title}
                              </Link>
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">{item.Description}</td>

                      <td className="align-middle">
                        <span className={`badge bg-${item.priorityBadgeBg}`}>
                          {item.priority}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <Card.Footer className="bg-white text-center">
              <Link href="#" className="link-primary">
                View All Happiness
              </Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Happiness;
