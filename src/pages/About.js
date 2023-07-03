import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import tomnook from '../assets/img/tomnook.png'

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <h3>About</h3>
            <br />
            <div className="about-container">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque suscipit optio, unde, incidunt dolor laudantium beatae quia porro placeat nihil, sit ipsum dolore similique neque quidem fugiat ullam ab! Porro?
                    Ullam dicta, molestiae molestias fuga earum numquam explicabo animi sit veniam quis? Fuga ducimus magnam minus consequuntur atque, voluptas culpa ullam veniam, necessitatibus quod vitae alias? Ut quae officiis eaque?
                    Illo laudantium culpa necessitatibus excepturi rerum aliquid alias sunt, incidunt reprehenderit accusantium! Illum aut ad distinctio ipsam cupiditate ut ipsum esse eveniet incidunt explicabo, perspiciatis quasi fugit eaque culpa vero!
                    Eligendi at labore iusto ex voluptatibus fugiat pariatur delectus eum dolores? Nam sunt nemo recusandae quia magnam consequuntur doloremque voluptatem ut corporis impedit. Inventore quasi velit harum ullam veritatis explicabo.
                    Enim, dolores ex veniam dolorum neque animi voluptas aut ad facere, doloribus quos aliquid aliquam nemo architecto perferendis laborum rem labore suscipit magni placeat laudantium sint? Consequuntur maxime magnam rem.
                    Delectus quis perferendis debitis porro nemo, velit odio voluptatum optio animi quas voluptatibus sapiente doloribus ipsam alias dolorum dolore totam qui quaerat aliquid facere corrupti at. Id suscipit unde in?
                    Odit reprehenderit inventore rem eos numquam sapiente. Voluptatum in, saepe fugit dolorum aliquid pariatur quisquam corrupti laudantium iusto dicta velit sapiente nam sequi quam omnis quod id perspiciatis vitae neque.
                    Id deleniti ut at pariatur magni voluptatibus, sequi ipsam necessitatibus rerum cum iure repellat optio quos non in dolores natus placeat, praesentium architecto sapiente eligendi! Voluptas eveniet consectetur fugit neque!
                </p>
                <img src={tomnook} alt="" />
            </div>
        </div>
    );
};

export default About;



