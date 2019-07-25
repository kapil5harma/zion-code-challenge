import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Creators } from './store';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Main from '../../components/Main/Main';
import './Dashboard.scss';

class Dashboard extends Component {
  render() {
    const { onFetchUserPhotos, onSearchChange, userPhotos, userList, results, loading } = this.props;
    return (
      <div className='Dashboard'>
        <Header />
        <Container className='Dashboard_Container'>
          <Main
            onFetchUserPhotos={onFetchUserPhotos}
            userPhotos={userPhotos}
            userList={userList}
            onSearchChange={onSearchChange}
            results={results}
            loading={loading}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.dashboard.loading,
    userPhotos: state.dashboard.userPhotos,
    userList: state.dashboard.userList,
    results: state.dashboard.results
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchUserPhotos: payload => dispatch(Creators.fetchUserPhotos(payload)),
  onSearchChange: payload => dispatch(Creators.searchChange(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Dashboard));
