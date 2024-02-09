import React, {useState} from "react";
import BookList from "../components/BookList/BookList";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm";

const Home = () => {
    const [search, setSearch] = useState("flower");
    
    return (
        <div>
            <Header />
            <SearchForm setSearch={setSearch}/>
            <BookList search={search}/>
        </div>
    );
};

export default Home;
