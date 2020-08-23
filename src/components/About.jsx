import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about__grid">
                <div className="about__grid__item-left">
                    <img src="./assets/img/22.jpg" alt="" />
                </div>
                <div className="about__grid__item-right">
                    <h3 className="about__grid__item-right-title">Failure Is The Condiment That Gives Sucess It'S Flavour</h3>
                    <p className="about__grid__item-right-content">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Amet non porro laboriosam rerum fugiat quod ullam earum dignissimos corporis, nemo provident
                    nostrum, nihil culpa. Et corrupti sit hic amet, animi unde cumque consequuntur omnis ad nihil optio
                    id eum qui, impedit deleniti? Veniam eum aspernatur incidunt? Doloremque, cum? Repellendus
                    consectetur, cupiditate tenetur provident neque, quas, totam eveniet nisi eius veritatis ea maiores
                    ducimus a reprehenderit minima magnam dicta! Aliquam libero voluptatum facilis dolorum architecto?
                    Doloribus fuga voluptate voluptatem corporis rem! Culpa nam et accusamus beatae!</p>
                    <a href="#" className=" btn btn-primary about__grid__item-right-btn">About me</a>
                </div>
            </div>
        </section>
    )
}
export default About;