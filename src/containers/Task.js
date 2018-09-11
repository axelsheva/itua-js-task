import React from "react";
import { connect } from "react-redux";

import Button from "../components/Button";

import { deleteTaskById } from "../actions/todoList";
import { editTask } from "../actions/taskForm";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isCompact: true };

    this.toggleCompact = this.toggleCompact.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleChangeClick = this.handleChangeClick.bind(this);
  }

  toggleCompact() {
    this.setState({ isCompact: !this.state.isCompact });
  }

  handleDeleteClick() {
    this.props.deleteTaskById(this.props.id);
  }

  handleChangeClick() {
    this.props.editTask(this.props);
  }

  render() {
    const { title, description, projectName, priority } = this.props;
    const { isCompact } = this.state;

    return (
      <div className="task">
        <h2>{title}</h2>
        <div className="row">
          <div className="col-6">Проект: {projectName}</div>
          <div className="col-6 priority">Приоритет: {priority}</div>
        </div>
        {!isCompact && <p>{description}</p>}
        <div className="task-footer">
          <Button className="btn-light" onClick={this.handleChangeClick}>
            Изменить
          </Button>
          <Button className="btn-light" onClick={this.handleDeleteClick}>
            Закрыть
          </Button>
          <Button className="btn-light" onClick={this.toggleCompact}>
            {isCompact ? "Развернуть" : "Свернуть"}
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteTaskById, editTask }
)(Task);
