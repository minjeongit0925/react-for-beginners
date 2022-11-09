import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams(); // id가 파라미터 

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie);
        setLoading(false);

    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <img src={movie.medium_cover_image} />
                    <h2>
                        {movie.title}
                    </h2>
                    <p>
                        {movie.description_full}
                    </p>
                </div>
            }
        </div>
    );
}

export default Detail;

// Home에서 해줬던 loading을 추가하기
// movie가 State에 없음. 현재 API에서 json을 받아와서 아무것도 안하고 있는 상태.
// -> 힌트: json을 state에 넣어보기