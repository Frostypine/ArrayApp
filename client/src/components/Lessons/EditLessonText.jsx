import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateLesson } from "../../api/lessonAPI";

import {
  selectLessons,
  selectLocalLessonInfo,
  editLessonText,
} from "../../state/lessonSlice";

function LessonProfileEditText({ showEditText, setShowEditText }) {
  const dispatch = useDispatch();
  const lessons = useSelector(selectLessons);
  const localLessonInfo = useSelector(selectLocalLessonInfo);
  const lesson = lessons.find((e) => e._id === localLessonInfo.lesson_id);
  const [lessonText, setLessonText] = useState(lesson.text);

  const closeEditText = () => setShowEditText(false);

  return (
    <div>
      <Modal show={showEditText} onHide={closeEditText}>
        <Modal.Header className="edit-modals" closeButton>
          <Modal.Title>Edit Text</Modal.Title>
        </Modal.Header>
        <Modal.Body className="edit-modals">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const textData = { _id: localLessonInfo.lesson_id, text: lessonText };
              dispatch(editLessonText(textData));
              
              updateLesson(localLessonInfo.lesson_id, { text: lessonText });
              closeEditText();
            }}
          >
            <Form.Group
              className="mb-6"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={5}
                value={lessonText}
                onChange={(e) => setLessonText(e.target.value)}
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Save Text
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default LessonProfileEditText;
