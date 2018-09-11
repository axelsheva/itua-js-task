import React from "react";
import { connect } from "react-redux";

import Button from "../components/Button";
import { togglePriority, changeFilter, openTaskForm } from "../actions/control";
import { selectProjectsNames } from "../selectors/todoList";

class ControlPanel extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(e) {
    this.props.changeFilter(e.target.value);
  }

  render() {
    if (this.props.isFormOpen) {
      return null;
    }

    return (
      <div className="row control-panel">
        <div className="col-4">
          <Button
            type="button"
            className="btn-outline-primary"
            onClick={this.props.openTaskForm}
          >
            Новая задача
          </Button>
        </div>
        <div className="col-4">
          <input
            type="checkbox"
            id="priority"
            checked={this.props.isPrioritySort}
            onChange={this.props.togglePriority}
          />
          <label htmlFor="priority" className="label-text">
            По приоритету
          </label>
        </div>
        <div className="col-4">
          <select
            className="custom-select"
            value={this.props.filterBy}
            onChange={this.handleFilterClick}
          >
            <option value="">Все</option>
            {this.props.projectsNames.map(projectName => (
              <option key={projectName} value={projectName}>
                {projectName}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isPrioritySort: state.control.isPrioritySort,
  filterBy: state.control.filterBy,
  isFormOpen: state.control.isFormOpen,
  projectsNames: selectProjectsNames(state)
});

export default connect(
  mapStateToProps,
  { togglePriority, changeFilter, openTaskForm }
)(ControlPanel);
