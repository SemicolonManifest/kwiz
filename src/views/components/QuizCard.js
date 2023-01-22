import { CCard, CRow, CCol, CCardImage, CCardBody, CCardTitle, CCardText } from "@coreui/react";

const QuizCard = (props) => {
  return (
    <CCard className="mb-3" style={{ maxWidth: "540px" }} key={props.id}>
      <CRow className="g-0">
        <CCol md={4}>
          <CCardImage src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
        </CCol>
        <CCol md={8}>
          <CCardBody>
            <CCardTitle>{props.title}</CCardTitle>
            <CCardText>{props.text + ""}</CCardText>
            <CCardText>
              <small className="text-medium-emphasis">John Doe</small>
            </CCardText>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  );
};

export default QuizCard;
