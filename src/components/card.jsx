import style from './Card.module.css';

export default function Card() {
    return (
        <div className={style.card}>
            <div className={style.cardImg}>
                <p>600 x 400</p>
            </div>
            <div className={style.cardBody}>
                <h2>Titolo del post</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor voluptatem a delectus, veniam, quisquam aspernatur doloribus modi maiores cum labore excepturi qui et quasi, dicta tempora deleniti fuga repellat esse? Fuga, perspiciatis? Dolor cumque est totam nulla in sint perferendis accusantium, consequatur voluptate nemo tempora alias nobis unde dolore rem.</p>
                <button>Leggi di più</button>
            </div>
        </div>
    );
};