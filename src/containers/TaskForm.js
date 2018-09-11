import React from "react";
import { connect } from "react-redux";

import Button from "../components/Button";

import { addTask, updateTask } from "../actions/todoList";
import { closeTaskForm } from "../actions/control";
import { changeTaskFormInput } from "../actions/taskForm";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleInputChange(e) {
    this.props.changeTaskFormInput(e.target.name, e.target.value);
  }

  handleSaveClick() {
    if (this.props.taskForm.id) {
      this.props.updateTask(this.props.taskForm);
    } else {
      this.props.addTask(this.props.taskForm);
    }
    this.props.closeTaskForm();
  }

  render() {
    if (!this.props.isFormOpen) {
      return null;
    }

    const { title, projectName, priority, description } = this.props.taskForm;

    return (
      <form className="task-form">
        <div className="form-group">
          <div className="row">
            <label htmlFor="title" className="col-6 form-label">
              Заголовок задачи
            </label>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                onChange={this.handleInputChange}
                value={title}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <label htmlFor="projectName" className="col-6 form-label">
              Название проекта
            </label>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                id="projectName"
                name="projectName"
                onChange={this.handleInputChange}
                value={projectName}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <label htmlFor="priority" className="col-6 form-label">
              Приоритет
            </label>
            <div className="col-6">
              <select
                className="custom-select"
                name="priority"
                onChange={this.handleInputChange}
                value={priority}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <label htmlFor="description" className="col-6 form-label">
              Описание
            </label>
            <div className="col-6">
              <textarea
                type="text"
                className="form-control"
                id="description"
                name="description"
                onChange={this.handleInputChange}
                value={description}
              />
            </div>
          </div>
        </div>
        <Button
          type="button"
          className="btn-primary task-form__save"
          onClick={this.handleSaveClick}
        >
          Сохранить
        </Button>
        <Button
          type="button"
          className="btn-outline-danger"
          onClick={this.props.closeTaskForm}
        >
          Отменить
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  taskForm: state.taskForm,
  isFormOpen: state.control.isFormOpen
});

export default connect(
  mapStateToProps,
  { addTask, updateTask, closeTaskForm, changeTaskFormInput }
)(TaskForm);
