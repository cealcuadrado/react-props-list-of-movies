import Movie from '../shared/movie/Movie';
import './Layout.css';

function Layout() {
    const movies = [
        { title: 'The Bourne Identity', year: 2002, director: 'Doug Liman' },
        { title: 'The Bourne Supremacy', year: 2004, director: 'Paul Greengrass'},
        { title: 'The Bourne Ultimatum', year: 2007, director: 'Paul Greengrass' },
        { title: 'The Bourne Legacy', year: 2012, director: 'Tony Gilroy' },
        { title: 'Jason Bourne', year: 2016, director: 'Paul Greengrass'}
    ];

    return (
      <div className="layout p-2">
        <div class="movies">
           {movies.map((x) => <Movie movie={x}/>)}
        </div>
      </div>
    );
}

export default Layout;