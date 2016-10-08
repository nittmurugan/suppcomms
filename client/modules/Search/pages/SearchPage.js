import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-mdl';

import SearchBar from '../components/SearchBar';
import SearchGrid from '../components/SearchGrid';
import styles from '../components/Search.css';

import { getShowSearchPage } from '#/App/AppReducer';

export class SearchPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cls = `${styles.hide} ${(this.props.showPage ? styles.appear : '')}`;
    return (
      <div className={cls}>
          <SearchBar />
          <SearchGrid />
      </div>
    );
  }
}

SearchPage.propTypes = {
  showPage: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    showPage: getShowSearchPage(state)
  }
};

export default connect(mapStateToProps)(SearchPage);
