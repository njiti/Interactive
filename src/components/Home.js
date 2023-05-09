import "./homeStyle.css"

function Home() {
    return (
        <>
            <div className="home">
                <h1>Software Engineer from Kenya looking form an opportunity to grow my skills as a backed engineer.</h1>

                {/* my photos */}
                <div class="carousel-container">
                    <div class="carousel">
                        <div class="item">
                            <img src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1"/>
                            <div class="like-btn">
                                <button>Like</button>
                            </div>
                        </div>
                        <div class="item">
                            <img src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2"/>
                            <div class="like-btn">
                                <button>Like</button>
                            </div>
                        </div>
                        <div class="item">
                            <img src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3"/>
                            <div class="like-btn">
                                <button>Like</button>
                            </div>
                        </div>
                        <div class="item">
                            <img src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4"/>
                            <div class="like-btn">
                                <button>Like</button>
                            </div>
                        </div>
                        <div class="item">
                            <img src="https://images.pexels.com/photos/12513230/pexels-photo-12513230.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 5"/>
                            <div class="like-btn">
                                <button>Like</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* most interactive */}

                <h4>Most helpful people <script>?</script></h4>
                <div class="image-container">
                    <div class="image">
                        <img src="https://via.placeholder.com/150x150" alt="Image 1" />
                        <p>John Doe</p>
                    </div>
                    <div class="image">
                        <img src="https://via.placeholder.com/150x150" alt="Image 2" />
                        <p>Jane Smith</p>
                    </div>
                    <div class="image">
                        <img src="https://via.placeholder.com/150x150" alt="Image 3" />
                        <p>Michael Johnson</p>
                    </div>
                    <div class="image">
                        <img src="https://via.placeholder.com/150x150" alt="Image 4" />
                        <p>Sara Brown</p>
                    </div>
                    <div class="image">
                        <img src="https://via.placeholder.com/150x150" alt="Image 5" />
                        <p>Robert Lee</p>
                    </div>
                    <div class="image">
                        <img src="https://via.placeholder.com/150x150" alt="Image 6" />
                        <p>Kate Wilson</p>
                    </div>
                    <div class="image">
                        <img src="https://via.placeholder.com/150x150" alt="Image 7" />
                        <p>David Garcia</p>
                    </div>
                    <div class="image">
                        <img src="https://via.placeholder.com/150x150" alt="Image 8" />
                        <p>Amy Davis</p>
                    </div>
                    <div class="image">
                        <img src="https://via.placeholder.com/150x150" alt="Image 9" />
                        <p>William Taylor</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;