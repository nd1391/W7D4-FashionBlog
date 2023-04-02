export default function Article() {
const Article1 = [
    <section>
            <article>
                <time datetime="2020-11-12">11/12/20</time>
                <h2 className="article-title">On the Street in Crooklyn</h2>
                <img src="./blog-image-1.jpg" alt="OJ Dress"/>
                <p>Cray ipsum dolor, sit amet consectetur adipisicing elit. Aperiam optio eveniet, perferendis non delectus eos repellat et perspiciatis exercitationem vitae dignissimos natus tempora, necessitatibus cumque magnam corrupti? Fuga, tempora possimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque maiores hic obcaecati minima, provident explicabo adipisci cumque quo voluptatem totam voluptate doloribus, at id praesentium non blanditiis dicta laboriosam officiis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, reprehenderit reiciendis corporis, ratione, doloremque debitis amet ipsam at facilis totam labore. Quisquam consectetur cupiditate ad nulla velit debitis dolores iusto. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus iusto maiores maxime fugit fugiat nam, accusamus numquam laudantium illo pariatur cumque similique dolores consequatur inventore, quasi doloremque odio officia iure?</p>
                <aside>
                    <h3> <a className="continue" href="#">Continues...</a></h3>
                </aside>
            </article>
        </section>
];
const Article2 = [
        <section>
            <article>
                <time datetime="2020-11-11">11/11/20</time>
                <h2 className="article-title">Vintage in Vogue</h2>
                <img src="./blog-image-2.jpg" alt="three fashionable folks"/>
                <p>Selfies sunt, lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam optio eveniet, perferendis non delectus eos repellat et perspiciatis exercitationem vitae dignissimos natus tempora, necessitatibus cumque magnam corrupti? Fuga, tempora possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, earum! Inventore ducimus labore rerum est sequi exercitationem adipisci incidunt itaque! Reiciendis earum placeat iste at vel soluta veritatis corrupti atque. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facilis sit cum deleniti veniam. Obcaecati dolor tempora omnis dolorem corporis expedita. Nesciunt, pariatur labore? At laborum omnis commodi aperiam minus.  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem dolorum adipisci nostrum dolor neque natus architecto quae fuga. Dignissimos veritatis ducimus perferendis placeat nam voluptates deleniti modi culpa sapiente vitae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores corporis ut autem incidunt architecto totam perferendis reiciendis reprehenderit! Tempore aliquid at maxime voluptatibus incidunt et, amet nulla. Eveniet, beatae rerum.</p>
                <aside>
                    <h3> <a className="continue" href="#">Continues...</a></h3>
                </aside>
            </article>
        </section>
]

    return (
        <main>
            {Article1}
            {Article2}
        </main>
        )
}