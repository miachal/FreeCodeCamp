import React from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';
import RandomSearch from './RandomSearch';
import Result from './Result';

class WikiViewer extends React.Component {
    searchRef = React.createRef();

    state = {
        results: []
    };

    handleSearch = e => {
        e.preventDefault();
        const search = this.searchRef.current.value;

        const endpoint = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json
&prop=info|pageimages|extracts&generator=search&utf8=1&formatversion=2&piprop=thumbnail%7Cname
&pithumbsize=150&exsentences=3&exintro=1&explaintext=1&exsectionformat=plain
&gsrprop=titlesnippet|sectiontitle|sectionsnippet|redirecttitle&gsrsearch=${search}`;

        fetch(endpoint)
            .then(r => r.json())
            .then(r => {
                const results = [];

                r.query.pages.forEach((item, index) => {
                    results.push(<Result key={index} details={item} />);
                });

                return results;
            })
            .catch(e => {
                const results = [
                    <Result
                        key={0}
                        details={{
                            title: 'The page does not exist.',
                            extract: 'There were no results matching the query. Try another one.'
                        }}
                    />
                ];
                return results;
            })
            .then(results => this.setState({ results }))
    };

    results = () => {
        if (this.state.results.length > 0) {
            return (
                <div className='mid'>
                    {this.state.results}
                </div>
            );
        }
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.results.length === 0 && this.state.results.length > 0) {
            const logo = document.querySelector('img.big');
            logo.classList = ['little'];
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='top'>
                    <Logo />
                    <SearchBox handleSearch={this.handleSearch} searchRef={this.searchRef} />
                    <RandomSearch />
                </div>

                {this.results()}
            </div>
        );
    }
}

export default WikiViewer;