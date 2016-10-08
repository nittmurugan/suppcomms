import React, { Component, PropTypes } from 'react';
import { Grid, Cell, Textfield, FABButton, Icon, Badge } from 'react-mdl';

import styles from './SearchBar.css';

let OtherOptions = (props) => {
  let cls = `$(styles.hide) $(this.props.showOtherOptions ? styles.appear : '')`;
};

export class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <Grid className={styles.container}>
        <Cell col={3}>
          <Textfield
            label="Divisions"
            floatingLabel
          />
        </Cell>
        <Cell col={3}>
          <Textfield
            label="Departments"
            floatingLabel
          />
        </Cell>
        <Cell col={3}>
          <Textfield
            label="Company Size"
            floatingLabel
          />
        </Cell>
        <Cell col={2}>
          <Textfield
            label="QS Number"
            floatingLabel
          />
        </Cell>
        <Cell col={1}>
          <FABButton mini primary>
            <Icon name="search" />
          </FABButton>
        </Cell>
      </Grid>
      <Grid>
        Overlay
      </Grid>
      </div>
    );
  }
}
