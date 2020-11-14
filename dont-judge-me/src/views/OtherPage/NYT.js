import React, {Component, Fragment, useEffect, useState} from "react";
import "./NYT.scss";

import 'pure-react-carousel/dist/react-carousel.es.css';
import { CarouselProvider, Slider, Slide,
  ButtonBack, ButtonFirst, ButtonLast, ButtonNext, DotGroup, Image
 } from 'pure-react-carousel';

import s from './style.scss';

const axios = require("axios")

const NYT = (props) => {

        const info = props.location.state
        const url = info.props
        const [data, setData] = useState({})
        
        useEffect(() => {
          axios.post("http://localhost:8000/api/getText", {
            url: url
          })
          .then(response => {
            setData(response.data)
            console.log(response.data[1]);
            console.log(response.data);
          })
          .catch(err => {
            console.log(err)
          })
        }, []);
        
        const [index, setIndex] = useState(0);

        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };

        if(data.length == 2) {
        return (
          <Fragment>
                <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="./css/style.css" />
        <title> Space Rippled Reveal Big Bang's Smoking Gun - The New York Times</title>
        <link rel="shortcut icon" href="https://static01.nyt.com/favicon.ico" />
        <header>
          <nav>
            <ul className="nav-left">
              <li className="left"><img src="./images/iconfinder_list2_4918907.svg" alt="hamburger" className="small-icon" /></li>
              <li className="search-icon left"><img src="./images/iconfinder_icon-111-search_314478.svg" alt="search" className="small-icon" /></li>
              <li className="space-cosmos left"><a href="#">Space &amp; Cosmos</a></li>
            </ul>
            <ul className="nav-center">
              <li><a href="#"><img src="./images/nytimes-wordmark.svg" alt="new york times logo" className="nytimes" /></a></li>
            </ul>
            <ul className="nav-right">
              <li className="subscribe left"><a href="#">Subscribe for full access</a></li>
              <li className="left"><button>Login</button></li>
            </ul>
            <div className="clear" />
          </nav>
        </header>
        <div className="clear" />
        <main className="page-main">
            <CarouselProvider
              visibleSlides={1}
              totalSlides={4}
              step={1}
              naturalSlideWidth={100}
              naturalSlideHeight={50}
              hasMasterSpinner
            >
              <Slider className={s.slider}>
                <Slide index={0}>
                  <Image src="./images/alan-guth.jpg" />
                </Slide>
                {/* {console.log(data[1].length)} */}
                <Slide index={1}>
                  <Image src="https://imagez.tmz.com/image/16/4by3/2020/11/14/1605a08cf12e4a33b51687cdc5400833_md.jpg" />
                </Slide>
                <Slide index={2}>
                  <Image src="https://imagez.tmz.com/image/c7/4by3/2020/11/14/c7b6ac6e157443c590a7b9dc6795aa22_md.jpg" />
                </Slide>
                <Slide index={3}>
                  <Image src="https://imagez.tmz.com/image/9e/o/2018/03/15/9efb4db1c2b555fe8e32cc3f3cde59e8_lg.png" />
                </Slide>
                {/* {data[1].map(item => {
                  <Slide index={1}>
                    <Image src={item.replace('\'','').replace('\'','')} />
                  </Slide>
                })} */}
              </Slider>
              <ButtonFirst>First</ButtonFirst>
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
              <DotGroup />
            </CarouselProvider>
            {/* <figure className="article-figure">
              <img alt="Alan Guth was one of the first physicists to hypothesize the existence of inflation, which explains how the universe expanded so uniformly and so quickly in the instant after the Big Bang 13.8 billion years ago." className="css-11cwn6f" src="./images/alan-guth.jpg" />
              <figcaption>
                Alan Guth was one of the first physicists to hypothesize the existence of inflation, which explains how the
                universe expanded so uniformly and so quickly in the instant after the Big Bang 13.8 billion years ago.Credit.
                <br /><span className="credit">Rick Friedman for The New York Times</span>
              </figcaption>
            </figure> */}
          {/* </article> */}
          <section className="article-body">
            {data[0].map(item => {
              return <p>{item.replace("\"","")}</p>;
            })}
            {/* <h6><a href="#">By Dennis Overbye</a></h6>
            <div className="social-icons">
              <ul>
                <li><time className="date-time" dateTime="2014-03-17T10:46:03-04:00">March 17, 2014</time></li>
                <li><img src="./images/icons.png" alt="icons" /></li>
              </ul>
            </div>
            <div className="clear" />
            <p>
              CAMBRIDGE, Mass. — One night late in 1979, an itinerant young
              physicist named Alan Guth, with a new son and a year’s appointment at
              Stanford, stayed up late with his notebook and equations, venturing
              far beyond the world of known physics.
            </p>
            <p>
              He was trying to understand why there was no trace of some exotic
              particles that should have been created in the Big Bang. Instead he
              discovered what might have made the universe bang to begin with. A
              potential hitch in the presumed course of cosmic evolution could have
              infused space itself with a special energy that exerted a repulsive
              force, causing the universe to swell faster than the speed of light
              for a prodigiously violent instant.
            </p>
            <p>
              If true, the rapid engorgement would solve paradoxes like why the
              heavens look uniform from pole to pole and not like a jagged, warped
              mess. The enormous ballooning would iron out all the wrinkles and
              irregularities. Those particles were not missing, but would be diluted
              beyond detection, like spit in the ocean.
            </p>
            <p>
              “SPECTACULAR REALIZATION,” Dr. Guth wrote across the top of the page
              and drew a double box around it.
            </p>
            <p>
              On Monday, Dr. Guth’s starship came in. Radio astronomers reported
              that they had seen the beginning of the Big Bang, and that his
              hypothesis, known undramatically as inflation, looked right.
            </p>
            <p>
              Reaching back across 13.8 billion years to the
              <a href="#">first sliver of cosmic time</a> with telescopes at the South Pole,
              a team of astronomers led by John M. Kovac of the Harvard-Smithsonian
              Center for Astrophysics detected ripples in the fabric of space-time —
              so-called <a href="#">gravitational waves</a> — the signature of a universe
              being wrenched violently apart when it was roughly a trillionth of a
              trillionth of a trillionth of a second old. They are the long-sought
              smoking-gun evidence of inflation, proof, Dr. Kovac and his colleagues
              say, that Dr. Guth was correct.
            </p>
            <p>
              Inflation has been the workhorse of cosmology for 35 years, though
              many, including Dr. Guth, wondered whether it could ever be proved.
            </p>
            <p>
              If corroborated, Dr. Kovac’s work will stand as a landmark in science
              comparable to the recent discovery of dark energy pushing the universe
              apart, or of the Big Bang itself. It would open vast realms of time
              and space and energy to science and speculation.
            </p>
            <p>
              Confirming inflation would mean that the universe we see, extending 14
              billion light-years in space with its hundreds of billions of
              galaxies, is only an infinitesimal patch in a larger cosmos whose
              extent, architecture and fate are unknowable. Moreover, beyond our own
              universe there might be an endless number of other universes bubbling
              into frothy eternity, like a pot of pasta water boiling over.
            </p>
            <h3>‘As Big as It Gets’</h3>
            <p>
              In our own universe, it would serve as a window into the forces
              operating at energies forever beyond the reach of particle
              accelerators on Earth and yield new insights into gravity itself. Dr.
              Kovac’s ripples would be the first direct observation of gravitational
              waves, which, according to Einstein’s theory of general relativity,
              should ruffle space-time.
            </p>
            <p>
              Marc Kamionkowski of Johns Hopkins University, an early-universe
              expert who was not part of the team, said, “This is huge, as big as it
              gets.”
            </p>
            <p>
              He continued, “This is a signal from the very earliest universe,
              sending a telegram encoded in gravitational waves.”
            </p>
            <p>
              The ripples manifested themselves as faint spiral patterns in a bath
              of microwave radiation that permeates space and preserves a picture of
              the universe when it was 380,000 years old and as hot as the surface
              of the sun.
            </p>
            <p>
              Dr. Kovac and his collaborators, working in an experiment known as
              Bicep, for Background Imaging of Cosmic Extragalactic Polarization,
              reported their results in a scientific briefing at the Center for
              Astrophysics here on Monday and in a set of papers submitted to The
              Astrophysical Journal.
          </p> */}
          </section>
          <section className="article-addational-info">
            <h2>The Theory of Inflation</h2>
            <p>
              Astronomers have found evidence to support the theory of inflation,
              which explains how the universe expanded so uniformly and so quickly
              in the instant after the Big Bang 13.8 billion years ago.
            </p>
            <div className="images">
              <img src="https://static01.nyt.com/newsgraphics/2014/03/18/theory-of-inflation/1ebaa1b972edda0f407fbaa0e010f6b50fb6792e/inflation-945.png" alt="The universe" />
              <div className="cards">
                <div className="top-three">
                  <p>
                    <span className="bold">THE UNIVERSE</span>
                    is just under 14 billion years old. From our position in the
                    Milky Way galaxy, we can observe a sphere that is now about 92
                    billion light-years across. But there's a mystery. Wherever we
                    look, the universe has an even temperature.
                  </p>
                </div>
                <div className="top-three">
                  <p>
                    <span className="bold">NOT ENOUGH TIME</span>
                    The universe is not old enough for light to have traveled the
                    vast distance from one side of the universe to the other, and
                    there has not been enough time for scattered patches of hot and
                    cold to mix into an even temperature.
                  </p>
                </div>
                <div className="top-three">
                  <p>
                    <span className="bold">DISTANT COFFEE</span>
                    At a smaller scale, imagine using a telescope to look a mile in
                    one direction. You see a coffee cup, and from the amount of
                    steam, you can estimate its temperature and how much it has
                    cooled.
                  </p>
                </div>
                <div className="top-three">
                  <p>
                    <span className="bold">COFFEE EVERYWHERE</span>
                    Now turn around and look a mile in the other direction. You see
                    a similar coffee cup, at exactly the same temperature.
                    Coincidence? Maybe. But if you see a similar cup in every
                    direction, you might want to look for another explanation.
                  </p>
                </div>
                <div className="down">
                  <p>
                    <span className="bold">STILL NOT ENOUGH TIME</span>
                    There has not been enough time to carry coffee cups from place
                    to place before they get cold. But if all the coffee cups were
                    somehow filled from a single coffee pot, all at the same time,
                    that might explain their even temperature.
                  </p>
                </div>
                <div className="down">
                  <p>
                    <span className="bold">INFLATION</span>
                    solves this problem. The theory proposes that, less than a
                    trillionth of a second after the Big Bang, the universe expanded
                    faster than the speed of light. Tiny ripples in the violently
                    expanding energy field eventually grew into the large-scale
                    structures of the universe.
                  </p>
                </div>
                <div className="down">
                  <p>
                    <span className="bold">FLUCTUATION</span>
                    Astronomers have now detected evidence of these ancient
                    fluctuations in swirls of polarized light in the cosmic
                    background radiation, which is energy left over from the early
                    universe. These are gravitational waves predicted by Einstein.
                  </p>
                </div>
                <div className="down">
                  <p>
                    <span className="bold">EXPANSION</span>
                    Returning to our coffee, imagine a single, central pot expanding
                    faster than light and cooling to an even temperature as it
                    expands. That is something like inflation. And the structure of
                    the universe mirrors the froth and foam of the original pot.
                  </p>
                </div>
              </div>
            </div>
            <p className="img-owner">By LARRY BUCHANAN and JONATHAN CORUM</p>
          </section>
          <section className="article-body">
            <p>
              Dr. Kovac said the chance that the results were a fluke was only one
              in 10 million.
            </p>
            <p>
              Dr. Guth, now 67, pronounced himself “bowled over,” saying he had not
              expected such a definite confirmation in his lifetime.
            </p>
            <p>
              “With nature, you have to be lucky,” he said. “Apparently we have been
              lucky.
            </p>
            <p>
              The results are the closely guarded distillation of three years’ worth
              of observations and analysis. Eschewing email for fear of a leak, Dr.
              Kovac personally delivered drafts of his work to a select few, meeting
              with Dr. Guth, who is now a professor at Massachusetts Institute of
              Technology (as is his son, Larry, who was sleeping that night in
              1979), in his office last week.
            </p>
            <p>
              “It was a very special moment, and one we took very seriously as
              scientists,” said Dr. Kovac, who chose his words as carefully as he
              tended his radio telescopes.
            </p>
            <p>
              Andrei Linde of Stanford, a prolific theorist who first described the
              most popular variant of inflation, known as chaotic inflation, in
              1983, was about to go on vacation in the Caribbean last week when
              Chao-Lin Kuo, a Stanford colleague and a member of Dr. Kovac’s team,
              <a href="#">knocked on his door with a bottle of Champagne</a> to tell
              him the news.
            </p>
            <div className="article-video">
              <iframe src="https://www.youtube.com/embed/ZlfIVEy_YOA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              <h5 className="video-desc">
                Stanford Professor Andrei Linde celebrates physics breakthrough
              </h5>
              <h6 className="video-credit">Video by StanfordUniversity</h6>
            </div>
            <p>
              Confused, Dr. Linde called out to his wife, asking if she had ordered
              anything.
            </p>
            <p>
              “And then I told him that in the beginning we thought that this was a
              delivery but we did not think that we ordered anything, but I simply
              forgot that actually I did order it, 30 years ago,” Dr. Linde wrote in
              an email.
            </p>
            <p>
              Calling from Bonaire, the Dutch Caribbean island, Dr. Linde said he
              was still hyperventilating. “Having news like this is the best way of
              spoiling a vacation,” he said.
            </p>
            <p>
              By last weekend, as social media was buzzing with rumors that
              inflation had been seen and news spread, astrophysicists responded
              with a mixture of jubilation and caution.
            </p>
            <p>
              Max Tegmark, a cosmologist at M.I.T., wrote in an email, “I think that
              if this stays true, it will go down as one of the greatest discoveries
              in the history of science.”
            </p>
            <p>
              John E. Carlstrom of the University of Chicago, Dr. Kovac’s mentor and
              head of a competing project called the South Pole Telescope,
              pronounced himself deeply impressed. “I think the results are
              beautiful and very convincing,” he said.
            </p>
            <p>
              Paul J. Steinhardt of Princeton, author of a competitor to inflation
              that posits the clash of a pair of universes as the cause of genesis,
              said that if true, the Bicep result would eliminate his model, but he
              expressed reservations about inflation.
            </p>
            <p>
              Lawrence M. Krauss of Arizona State and others also emphasized the
              need for confirmation, noting that the new results exceeded earlier
              estimates based on temperature maps of the cosmic background by the
              European Space Agency’s Planck satellite and other assumptions about
              the universe.
            </p>
            <p>
              “So we will need to wait and see before we jump up and down,” Dr.
              Krauss said.
            </p>
            <p>
              Corroboration might not be long in coming. The Planck spacecraft will
              report its own findings this year. At least a dozen other teams are
              trying similar measurements from balloons, mountaintops and space.
            </p>
            <h3>Spirals in the Sky</h3>
            <p>
              Gravity waves are the latest and deepest secret yet pried out of the
              cosmic microwaves, which were discovered accidentally by Arno Penzias
              and Robert Wilson at Bell Labs 50 years ago. They won the Nobel Prize.
            </p>
            <p>
              Dr. Kovac has spent his career trying to read the secrets of these
              waves. He is one of four leaders of Bicep, which has operated a series
              of increasingly sensitive radio telescopes at the South Pole, where
              the thin, dry air creates ideal observing conditions. The others are
              Clement Pryke of the University of Minnesota, Jamie Bock of the
              California Institute of Technology and Dr. Kuo of Stanford.
            </p>
            <p>
              “The South Pole is the closest you can get to space and still be on
              the ground,” Dr. Kovac said. He has been there 23 times, he said,
              wintering over in 1994. “I’ve been hooked ever since,” he said.
            </p>
            <figure className="article-img">
              <img src="https://static01.nyt.com/images/2014/03/18/science/space/18cosmos-2/18cosmos-2-jumbo.jpg?quality=90&auto=webp" alt="The Bicep2 telescope" />
              <figcaption>
                The Bicep2 telescope, in the foreground, was used to detect the
                faint spiraling gravity patterns — the signature of a universe being
                wrenched violently apart at its birth.
                <span className="credit">Steffen Richter/Associated Press</span>
              </figcaption>
            </figure>
            <p>
              In 2002, he was part of a team that discovered that the microwave
              radiation was polarized, meaning the light waves had a slight
              preference to vibrate in one direction rather than another.
            </p>
            <p>
              This was a step toward the ultimate goal of detecting the
              gravitational waves from inflation. Such waves, squeezing space in one
              direction and stretching it in another as they go by, would twist the
              direction of polarization of the microwaves, theorists said. As a
              result, maps of the polarization in the sky should have little arrows
              going in spirals.
            </p>
            <p>
              Detecting those spirals required measuring infinitesimally small
              differences in the temperature of the microwaves. The group’s
              telescope, Bicep2, is basically a giant superconducting thermometer.
            </p>
            <p>“We had no expectations what we would see,” Dr. Kovac said.</p>
            <p>
              The strength of the signal surprised the researchers, and they spent a
              year burning up time on a Harvard supercomputer, making sure they had
              things right and worrying that competitors might beat them to the
              breakthrough.
            </p>
            <h4>A Special Time</h4>
            <p>
              The data traced the onset of inflation to a time that physicists like
              Dr. Guth, staying up late in his Palo Alto house 35 years ago,
              suspected was a special break point in the evolution of the universe.
            </p>
            <p>
              Physicists recognize four forces at work in the world today: gravity,
              electromagnetism, and strong and weak nuclear forces. But they have
              long suspected that those are simply different manifestations of a
              single unified force that ruled the universe in its earliest, hottest
              moments.
            </p>
            <p>
              As the universe cooled, according to this theory, there was a fall
              from grace, like some old folk mythology of gods or brothers falling
              out with each other. The laws of physics evolved, with one force after
              another splitting away.
            </p>
            <p>That was where Dr. Guth came in.</p>
            <p>
              Under some circumstances, a glass of water can stay liquid as the
              temperature falls below 32 degrees, until it is disturbed, at which
              point it will rapidly freeze, releasing latent heat.
            </p>
            <p>
              Similarly, the universe could “supercool” and stay in a unified state
              too long. In that case, space itself would become imbued with a
              mysterious latent energy.
            </p>
            <p>
              Inserted into Einstein’s equations, the latent energy would act as a
              kind of antigravity, and the universe would blow itself up. Since it
              was space itself supplying the repulsive force, the more space was
              created, the harder it pushed apart.
            </p>
            <p>
              What would become our observable universe mushroomed in size at least
              a trillion trillionfold — from a submicroscopic speck of primordial
              energy to the size of a grapefruit — in less than a cosmic eye-blink.
            </p>
            <p>
              Almost as quickly, this pulse would subside, relaxing into ordinary
              particles and radiation. All of normal cosmic history was still ahead,
              resulting in today’s observable universe, a patch of sky and stars
              billions of light-years across. “It’s often said that there is no such
              thing as a free lunch,” Dr. Guth likes to say, “but the universe might
              be the ultimate free lunch.”
            </p>
            <p>
              Make that free lunches. Most of the hundred or so models resulting
              from Dr. Guth’s original vision suggest that inflation, once started,
              is eternal. Even as our own universe settled down to a comfortable
              homey expansion, the rest of the cosmos will continue blowing up,
              spinning off other bubbles endlessly, a concept known as the
              multiverse.
            </p>
            <p>
              So the future of the cosmos is perhaps bright and fecund, but do not
              bother asking about going any deeper into the past.
            </p>
            <p>
              We might never know what happened before inflation, at the very
              beginning, because inflation erases everything that came before it.
              All the chaos and randomness of the primordial moment are swept away,
              forever out of our view.
            </p>
            <p>
              “If you trace your cosmic roots,” said Abraham Loeb, a
              Harvard-Smithsonian astronomer who was not part of the team, “you wind
              up at inflation.”
            </p>
            <span className="article-closing">
              A version of this article appears in print on March 18, 2014, Section
              A, Page 1 of the New York edition with the headline: Space Ripples
              Reveal Big Bang’s Smoking Gun. <a href="#">Order Reprints</a> |
              <a href="#">Today’s Paper</a> | <a href="#">Subscribe</a>
            </span>
            <div className="social-icons-end">
              <button>READ 615 COMMENTS</button>
              <img src="./images/closing-icons.png" alt="icons" />
            </div>
            <div className="clear" />
          </section>
          <div>
            <div className="articles">
              <section className="extra-articles">
                <h5>More in Space &amp; Cosmos</h5>
                <div className="articles-box">
                  <div className="small-articles">
                    <figure>
                      <img src="https://static01.nyt.com/images/2019/10/22/science/22BLUEORIGIN-1/merlin_154627800_2a8d00e6-e7b0-465f-897b-752495a157d2-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale" alt="Tom Brenner for The New York Times" />
                      <figcaption>
                        Tom Brenner for The New York Times
                      </figcaption>
                    </figure>
                    <div className="extra-content">
                      <h3>
                        <a href="#">Jeff Bezos’ Blue Origin to Partner With 3 Companies on NASA Moon Lander</a>
                      </h3>
                      <p>Oct. 22</p>
                    </div>
                  </div>
                  <div className="small-articles">
                    <figure>
                      <img alt="The astronauts Jessica Meir, left, and Christina Koch, aboard the International Space Station." src="https://static01.nyt.com/images/2019/10/22/science/18SCI-SPACEWALKCHAT1/18SCI-SPACEWALKCHAT1-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale" />
                      <figcaption>
                        NASA, via Associated Press
                      </figcaption>
                    </figure>
                    <div className="extra-content">
                      <h3>
                        <a href="#">Why NASA’s First All-Women Spacewalk Made History</a>
                      </h3>
                      <p>Oct. 18</p>
                    </div>
                  </div>
                  <div className="small-articles">
                    <figure>
                      <img alt="" src="https://static01.nyt.com/images/2019/10/16/science/16SPACESUITS-loop-cover/16SPACESUITS-loop-cover-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale" />
                      <figcaption>
                        Image by Calla Kessler/The New York Times
                      </figcaption>
                    </figure>
                    <div className="extra-content">
                      <h3>
                        <a href="#">This Is the Free Jumpsuit You’ll Get With a $250,000 Ticket
                          to Space</a>
                      </h3>
                      <p>Oct. 16</p>
                    </div>
                  </div>
                  <div className="small-articles shift">
                    <figure>
                      <img alt="Mr. Leonov emerging from the Voskhod 2 spacecraft on March 18, 1965. The spacecraft was orbiting above Earth at some 18,000 miles an hour, and a tethered Mr. Leonov spent about 10 minutes outside of it." src="https://static01.nyt.com/images/2019/10/12/obituaries/11Leonov2/merlin_162529287_12b15624-98c9-49e3-9c66-334794daf6cb-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale" />
                      <figcaption>
                        Associated Press
                      </figcaption>
                    </figure>
                    <div className="extra-content">
                      <h3>
                        <a href="#">Aleksei Leonov, First to Walk in Space, Dies at 85</a>
                      </h3>
                      <p>Oct. 11</p>
                    </div>
                  </div>
                  <div className="small-articles shift">
                    <figure>
                      <img alt="James Peebles made theoretical advances in cosmology, while Michel Mayor and Didier Queloz were the first to find a planet orbiting another sun-like star." src="https://static01.nyt.com/images/2019/10/09/world/08nobel-sub/08nobel-sub-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale" />
                      <figcaption>
                        Image by Jonathan Nackstrand/Agence France-Presse — Getty Images
                      </figcaption>
                    </figure>
                    <div className="extra-content">
                      <h3>
                        <a href="#">Nobel Prize in Physics Awarded for Studies of Earth’s Place
                          in the Univers</a>
                      </h3>
                      <p>Oct. 8</p>
                    </div>
                  </div>
                  <div className="small-articles shift">
                    <figure>
                      <img alt="Dr. Janet Kavandi, the director of NASA’s Glenn Research Center in Cleveland, Ohio, retired on Monday." src="https://static01.nyt.com/images/2019/10/08/science/00SCI-KAVANDI1/00SCI-KAVANDI1-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale" />
                      <figcaption>
                        Allison Farrand for The New York Times
                      </figcaption>
                    </figure>
                    <div className="extra-content">
                      <h3>
                        <a href="#">An Astronaut Who Built Paths to Space for Other Women</a>
                      </h3>
                      <p>Oct. 2</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="most-popular">
                <h5>Most Popular</h5>
                <p>
                  <a href="#">Thanksgiving Getaway: Going Someplace Other Than Grandmother’s
                    House</a>
                </p>
                <p>
                  <a href="#">How Thom Yorke Learned to Stop Worrying and (Mostly) Love Rock
                    Stardom</a>
                </p>
                <p><a href="#">For Trump, No Joy in Mudville</a></p>
                <p><a href="#">What We Learned in N.F.L. Week 8</a></p>
                <p><a href="#">How Did the Diner Menu Get So Long?</a></p>
                <p>
                  <a href="#">Opinion: Early to Bed, Early to Rise Makes Me Depressed and
                    Sick</a>
                </p>
                <p>
                  <a href="#">‘SNL’: Chance the Rapper Hosts as Bill Clinton Crashes a Trump
                    Rally</a>
                </p>
                <p>
                  <a href="#">Maps: Kincade and Getty Fires, Evacuation Zones and Power
                    Outages</a>
                </p>
                <p>
                  <a href="#">Special Operations Raid Said to Kill Senior Terrorist Leader in
                    Syria</a>
                </p>
                <p>
                  <a href="#">‘Silicon Valley,’ Darker Than Ever, Captures the Bleak Mood of
                    Tech</a>
                </p>
              </section>
              <div className="clear" />
            </div>
            <div className="articles">
              {/* <section className="extra-articles editor-section">
                <h5>Editors’ Picks</h5>
                <div className="articles-box">
                  <div className="small-articles">
                    <figure>
                      <img alt="Koren Shadmi" src="https://static01.nyt.com/images/2019/10/23/dining/23diner-illo-web-promo/23diner-illo-web-promo-threeByTwoSmallAt2X-v2.jpg?quality=75&auto=webp&disable=upscale" />
                      <figcaption>Koren Shadmi</figcaption>
                    </figure>
                    <div className="extra-content">
                      <h3>
                        <a href="#">How Mary-Kay Wilmers Became Britain’s Most Influential
                          Editor</a>
                      </h3>
                      <p>Oct. 24</p>
                    </div>
                  </div>
                  <div className="small-articles">
                    <figure>
                      <img alt="Carlos Correa and the Houston Astros must win at least two games in Washington." src="https://static01.nyt.com/images/2019/10/25/sports/24jpkepner-astros2-print/merlin_163206807_d0cae5fd-d8c7-4cf2-9bfd-585828906b6d-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale" />
                      <figcaption>Elsa/Getty Images</figcaption>
                    </figure>
                    <div className="extra-content">
                      <h3>
                        <a href="#">36 Hours in Rijeka, Croatia</a>
                      </h3>
                      <p>Oct. 24</p>
                    </div>
                  </div>
                  <div className="small-articles">
                    <figure>
                      <img alt="“I’ve spent a fair amount of time in Washington, and it was pretty clear that nothing was going to get done, and nothing has gotten done,” Mr. Stack said." src="https://static01.nyt.com/images/2019/10/27/business/24CORNEROFFICE-02/merlin_162912600_1b91ae60-983d-4e49-bdc3-bf4f379ce014-threeByTwoSmallAt2X.jpg?quality=75&auto=webp&disable=upscale" />
                      <figcaption>Guerin Blask for The New York Times</figcaption>
                    </figure>
                    <div className="extra-content">
                      <a href="#">New Orleans Is Ready to Love Zion Williamson, Even if It
                        Has to Wait</a>
                      <p>Oct. 22</p>
                    </div>
                  </div>
                </div>
              </section> */}
            </div>
            <div className="clear" />
          </div>
        </main>
        <footer>
          <div className="articles">
            <hr className="footer-hr" />
            <div className="footer-icons">
              <img src="./images/nytimes-wordmark.svg" alt="new york times logo" />
              <a href="#">Go to Home Page »</a>
            </div>
            <div className="clear" />
            <div className="nyt-links">
              <ul>
                <li>NEWS</li>
                <li><a href="#">Home Page</a></li>
                <li><a href="#">World</a></li>
                <li><a href="#">U.S.</a></li>
                <li><a href="#">Politics</a></li>
                <li><a href="#">Election 2020</a></li>
                <li><a href="#">New York</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Tech</a></li>
                <li><a href="#">Science</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Obituaries</a></li>
                <li><a href="#">Today's Paper</a></li>
                <li><a href="#">Corrections</a></li>
              </ul>
              <ul>
                <li>OPINION</li>
                <li><a href="#">Today's Opinion</a></li>
                <li><a href="#">Op-Ed Columnists</a></li>
                <li><a href="#">Editorials</a></li>
                <li><a href="#">Op-Ed Contributors</a></li>
                <li><a href="#">Letters</a></li>
                <li><a href="#">Sunday Review</a></li>
                <li><a href="#">Video: Opinion</a></li>
              </ul>
              <ul>
                <li>ARTS</li>
                <li><a href="#">Today's Arts</a></li>
                <li><a href="#">Art &amp; Design</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#">Dance</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Pop Culture</a></li>
                <li><a href="#">Television</a></li>
                <li><a href="#">Theater</a></li>
                <li><a href="#">Video: Arts</a></li>
              </ul>
              <ul>
                <li>LIVING</li>
                <li><a href="#">Automobiles</a></li>
                <li><a href="#">Crossword</a></li>
                <li><a href="#">Education</a></li>
                <li><a href="#">Food</a></li>
                <li><a href="#">Health</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Magazine</a></li>
                <li><a href="#">Parenting</a></li>
                <li><a href="#">Real Estate</a></li>
                <li><a href="#">Style</a></li>
                <li><a href="#">T Magazine</a></li>
                <li><a href="#">Travel</a></li>
                <li><a href="#">Love</a></li>
              </ul>
              <ul>
                <li>MORE</li>
                <li><a href="#">Reader Center</a></li>
                <li><a href="#">Wirecutter</a></li>
                <li><a href="#">Live Events</a></li>
                <li><a href="#">The Learning Network</a></li>
                <li><a href="#">Tools &amp; Services</a></li>
                <li><a href="#">N.Y.C. Events Guide</a></li>
                <li><a href="#">Multimedia</a></li>
                <li><a href="#">Photography</a></li>
                <li><a href="#">Video</a></li>
                <li><a href="#">Newsletters</a></li>
                <li><a href="#">NYT Store</a></li>
                <li><a href="#">Times Journeys</a></li>
                <li><a href="#">Manage My Account</a></li>
              </ul>
              <ul className="subscription">
                <li>SUBSCRIBE</li>
                <li className="relative"><span className="absolute"><img src="./images/Home_Delivery.PNG" alt="home" /></span><a href="#">Home Delivery</a></li>
                <li className="relative"><span className="absolute"><img src="./images/subscriptions.PNG" alt="subscriptions" /></span><a href="#">Digital Subscriptions</a></li>
                <li className="relative"><span className="absolute"><img src="./images/crossword.PNG" alt="subscriptions" /></span><a href="#">Crossword</a></li>
                <li className="relative"><span className="absolute"><img src="./images/fork.PNG" alt="subscriptions" /></span><a href="#">Cooking</a></li>
                <li className="small"><a href="#">Email Newsletters</a></li>
                <li className="small"><a href="#">Corporate Subscriptions</a></li>
                <li className="small"><a href="#">Education Rate</a></li>
                <li className="smaller-sub"><hr /><a href="#">Mobile Applications</a></li>
                <li className="smaller-sub"><a href="#">Replica Edition</a></li>
                <li className="smaller-sub"><a href="#">Español</a></li>
                <li className="smaller-sub"><a href="#">中文网</a></li>
              </ul>
            </div>
            <div className="clear" />
            <div className="nyt-footer">
              <ul>
                <li><a href="#">© 2019 The New York Times Company</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Work with us</a></li>
                <li><a href="#">Advertise</a></li>
                <li><a href="#">T Brand Studio</a></li>
                <li><a href="#">Your Ad Choices</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Terms of Sale</a></li>
                <li><a href="#">Site Map</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Subscriptions</a></li>
              </ul>
            </div>
          </div>
        </footer>
        {/* <aside className="editors-aside">
          <h5>Editors’ Picks</h5>
          <div className="aside-container">
            <div>
              <figure>
                <img alt="aside-image-1" src="https://static01.nyt.com/images/2019/10/30/dining/28Kenji1/28Kenji1-square640.jpg?quality=75&auto=webp&disable=upscale&width=350" />
              </figure>
              <div className="image-info"><p className="aside-p">
                  The Secret Ingredient That Improves Meat Every Time</p></div>
            </div>
            <div>
              <figure>
                <img alt="" src="https://static01.nyt.com/images/2019/10/31/books/30bookprincenthal3/30bookprincenthal3-square640-v2.jpg?quality=75&auto=webp&disable=upscale&width=350" />
              </figure>
              <div className="image-info"><p className="aside-p">
                  ‘Unspeakable Acts’ Revisits a Pivotal Moment in the Art World’s Treatment of Sexual Violence</p></div>
            </div>
            <div>
              <figure>
                <img alt="" src="https://static01.nyt.com/images/2019/10/28/fashion/oakImage-1572300722721/oakImage-1572300722721-square640-v2.jpg?quality=75&auto=webp&disable=upscale&width=350" />
              </figure>
              <div className="image-info"><p className="aside-p">
                  ‘OK Boomer’ Marks the End of Friendly Generational Relations</p></div>
            </div>
          </div>
        </aside> */}
        <div className="fixed-bottom">
          <p>Access more of the times by creating a free account or loggin in</p>
          <div className="expand">
            <p>Expand</p>
            <div className="expand-arrow"><img src="./images/iconfinder_ic_keyboard_arrow_up_48px_352469.svg" alt="up-arrow" /></div>
          </div>
        </div>
        <div className="clear" />
      </div>
    );
        </Fragment>
    );
  } else {
    return(
      <div></div>
    )
  }
}
export default NYT;