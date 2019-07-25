import React, { Component } from 'react';
import { Search, List } from 'semantic-ui-react';
import './Main.scss';

class Main extends Component {
  render() {
    const {
      onFetchUserPhotos: handleResultSelect,
      userPhotos,
      userList,
      loading,
      onSearchChange: handleSearchChange,
      results
    } = this.props;
    console.log('userList: ', userList);

    return (
      <div className='Main'>
        <div className='Sidebar'>
          <Search
            loading={loading}
            onResultSelect={(e, data) => {
              console.log('e: ', e);
              console.log('data: ', data);
              handleResultSelect({ username: data.result.title });
            }}
            onSearchChange={e => handleSearchChange({ username: e.currentTarget.value })}
            results={results}
          />
          {userList.length ? (
            <List>
              <h5>Searched Users' List:</h5>
              {userList.map(user => (
                <List.Item>{user}</List.Item>
              ))}
            </List>
          ) : (
            <h5>Search for a username</h5>
          )}
        </div>
        <div className='Content'>
          {userPhotos.length ? (
            userPhotos.map(photo => {
              const {
                id,
                urls: { regular },
                alt_description: alt
              } = photo;

              return (
                <div className='photo' key={id}>
                  <img src={regular} alt={alt} width='600' height='400' />
                </div>
              );
            })
          ) : (
            <div className='center'>No Photos found</div>
          )}
        </div>
      </div>
    );
  }
}

export default Main;
