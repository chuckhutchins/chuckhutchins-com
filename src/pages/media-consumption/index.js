import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import BookList from '/src/components/media-consumption/BookList';

export default function IndexPage() {
    return (
        <Layout>
            <main className="wishlist">
                <SEO title={"Media Consumption"}/>
                <div>
                    <h2>Media Consumption</h2>
                    <p>Hey, this is all the stuff I've read/watched/played.</p>
                </div>
                <div className="hr--mini"/>
                <div>
                    <BookList />
                </div>
                <div className="hr--mini"/>
                <div>
                    <h3>2020 - Books - In progress</h3>
                    <ul className="list">
                        <li>Pragmatic Programming (10/12)</li>
                        <li>Getting Things Done</li>
                    </ul>
                    <h3>2020 - Books - Finished</h3>
                    <ul className="list">
                        <li>The Umbrella Academy: Apocalypse Suite (12/31 - 12/31)</li>
                        <li>Ready Player One (11/26 - 12/6)</li>
                        <li>Mistborn: The Her oof Ages* (11/15 - 11/22)</li>
                        <li>Atomic Habits* (11/5 - 11/15)</li>
                        <li>The Martian (10/29 - 11/24)</li>
                        <li>Solutions and Other Problems (10/20 - 10/20)</li>
                        <li>Extraordinary Means (10/12 - 10/19)</li>
                        <li>The Ballad of Songbirds and Snakes* (10/4 - 10/8)</li>
                        <li>Mistborn: The Well of Ascension (9/8 - 10/3)</li>
                        <li>Deep Work (9/7 - 9/14)</li>
                        <li>Mistborn: The Final Empire* (9/3 - 9/7)</li>
                        <li>We Are Okay (9/1 - 9/2)</li>
                        <li>The Adventure Zone: Here There Be Gerblins* (8/31 - 9/1)</li>
                        <li>King Dork</li>
                        <li>The Beginning of Everything</li>
                        <li>So Good They Can't Ignore You</li>
                        <li>Hyperbole and a Half: Unfortunate Situations, Flawed Coping Mechanisms, Mayhem, and Other Things That Happened</li>
                        <li>The Magician's Land*</li>
                        <li>The Magician King*</li>
                        <li>The Magicians*</li>
                        <li>Digital Minimalism</li>
                        <li>Harry Potter and the Deathly Hallows</li>
                        <li>Harry Potter and the Half-Blood Prince</li>
                        <li>Refactoring UI*</li>
                        <li>Harry Potter and the Order of the Phoenix</li>
                        <li>Harry Potter and the Goblet of Fire</li>
                        <li>Harry Potter and the Prisoner of Azkaban</li>
                        <li>Harry Potter and the Chamber of Secrets</li>
                        <li>Harry Potter and the Philosopher's Stone</li>
                    </ul>
                    <h3>2020 - Books - Abandoned</h3>
                    <ul className="list">
                        <li>The Boys (12/18 - 12/20)</li>
                        <li>Tools of Titans (12/13 - 12/18)</li>
                        <li>1985 (12/6 - 12/12)</li>
                        <li>Docile (8/30 - 8/30)</li>
                        <li>His Dark Materials</li>
                    </ul>
                </div>
                <div className="hr--mini"/>
                <div>
                    <h3>2020 - Movies</h3>
                    <ul className="list">
                        <li>Star Wars: Episode III - Revenge of the Sith (12/31)</li>
                        <li>Star Wars: Episode II - Attack of the Clones (12/30)</li>
                        <li>Star Wars: Episode I - The Phantom Menace (12/29)</li>
                        <li>Borat Subsequent Moviefilm: Delivery of Prodigious Bribe to American Regime for Make Benefit Once Glorious Nation of Kazakhstan (10/25)</li>
                        <li>Borat: Cultural Learnings of America for Make Benefit Glorious Nation of Kazakhstan (10/25)</li>
                        <li>Harry Potter and the Sorcerer's Stone</li>
                        <li>Have A Nice Trip</li>
                    </ul>
                </div>
                <div className="hr--mini"/>
                <div>
                    <h3>2020 - TV Shows - In progress</h3>
                    <ul className="list">
                        <li>The Magicians (S1)</li>
                        <li>The Midnight Gospel (S1)</li>
                        <li>Bob's Burgers (S3)</li>
                    </ul>
                    <h3>2020 - TV Shows - Finished</h3>
                    <ul className="list">
                        <li>Letterkenny (S9)</li>
                        <li>The Umbrella Academy* (S2)</li>
                        <li>The Mandalorian* (S2)</li>
                        <li>The Umbrella Academy (S1)</li>
                        <li>Queen's Gambit (S1)</li>
                        <li>Letterkenny* (S8)</li>
                        <li>Letterkenny* (S7)</li>
                        <li>Letterkenny* (S6)</li>
                        <li>Littlekenny* (S1)</li>
                        <li>Letterkenny* (S5)</li>
                        <li>Letterkenny* (S4)</li>
                        <li>Letterkenny (S3)</li>
                        <li>Letterkenny* (S2)</li>
                        <li>Letterkenny* (S1)</li>
                        <li>Schitt's Creek (S6)</li>
                        <li>Brooklyn 99* (S7)</li>
                        <li>Brooklyn 99* (S6)</li>
                        <li>Brooklyn 99* (S5)</li>
                        <li>Brooklyn 99 (S4)</li>
                        <li>Brooklyn 99* (S3)</li>
                        <li>Brooklyn 99* (S2)</li>
                        <li>Brooklyn 99* (S1)</li>
                        <li>What We Do In The Shadows* (S2)</li>
                        <li>What We Do In The Shadows* (S1)</li>
                        <li>Dead to Me* (S2)</li>
                        <li>Dead to Me* (S1)</li>
                        <li>Schitt's Creek (S5)</li>
                        <li>Schitt's Creek (S4)</li>
                        <li>Schitt's Creek (S3)</li>
                        <li>Schitt's Creek (S2)</li>
                        <li>Schitt's Creek (S1)</li>
                        <li>Space Force (S1)</li>
                        <li>Community* (S6)</li>
                        <li>Community* (S5)</li>
                        <li>Community* (S4)</li>
                        <li>Community* (S3)</li>
                        <li>Community* (S2)</li>
                        <li>Community* (S1)</li>
                        <li>The Last Kingdom* (S4)</li>
                        <li>Tiger King* (S1)</li>
                        <li>Bob's Burgers (S2)</li>
                        <li>Bob's Burgers (S1)</li>
                        <li>The Circle* (S1)</li>
                        <li>Goop (S1)</li>
                        <li>Bojack Horseman* (S6)</li>
                        <li>Bojack Horseman* (S5)</li>
                        <li>Bojack Horseman* (S4)</li>
                        <li>Bojack Horseman* (S3)</li>
                        <li>Bojack Horseman* (S2)</li>
                        <li>Bojack Horseman* (S1)</li>
                        <li>Love Is Blind* (S1)</li>
                        <li>The Mandalorian* (S1)</li>
                        <li>You* (S2)</li>
                        <li>The Good Place* (S4)</li>
                        <li>I'm Not Okay With This* (S1)</li>
                        <li>Living With Yourself* (S1)</li>
                    </ul>
                    <h3>2020 - TV Shows - Abandoned</h3>
                    <ul className="list">
                        <li>Forged In Fire (S1)</li>
                        <li>Angie Tribeca (S1)</li>
                        <li>The Floor Is Lava (S1)</li>
                        <li>Good Eats: Reloaded (S1)</li>
                        <li>Avatar: The Last Airbender (S1)</li>
                        <li>Kitten Rescue (S1)</li>
                        <li>100 Humans (S1)</li>
                    </ul>
                </div>
                <div className="hr--mini"/>
                <div>
                    <h3>2020 - Video Games - In progress</h3>
                    <ul className="list">
                        <li>Picross P4 (11-18)</li>
                        <li>Divinity Original Sin 2</li>
                        <li>Stardew Valley*</li>
                        <li>Rune Factory 4 Special*</li>
                        <li>Tales of Vesperia*</li>
                    </ul>
                    <h3>2020 - Video Games - Finished</h3>
                    <ul className="list">
                        <li>Final Fantasy VIII (12/26 - 12/31)</li>
                        <li>Hyrule Warriors: Age of Calamity* (10/30 - 12/13)</li>
                        <li>Picross P3 (10/24 - 11/3)</li>
                        <li>Ikenfell (10/17 - 10/31)</li>
                        <li>Wintermoor Tactics Club</li>
                        <li>The Legend of Zelda: Breath of the Wild*</li>
                        <li>Pokemon Sword</li>
                        <li>Persona 4 Golden*</li>
                        <li>Final Fantasy VII*</li>
                        <li>Animal Crossing: New Horizons*</li>
                        <li>The Witcher 3: Wild Hunt*</li>
                        <li>The Legend of Zelda: Link's Awakening*</li>
                        <li>Picross P2*</li>
                    </ul>
                    <h3>2020 - Video Games - Abandoned</h3>
                    <ul className="list">
                        <li>Roundguard (11/28)</li>
                        <li>Story of Seasons: Friends of Mineral Town (10/31)</li>
                        <li>Pokemon Cafe Mix</li>
                        <li>Elder Scrolls Blades</li>
                        <li>Alliance Alive</li>
                        <li>Legend of Keepers</li>
                    </ul>
                    <h3>2020 - Video Games - Other</h3>
                    <ul className="list">
                        <li>Disgaea 5 Complete</li>
                        <li>Pokemon Sword</li>
                    </ul>
                </div>
                <div className="hr--mini"/>
                <div>
                    <p>* Denotes a recommended title.</p>
                </div>
            </main>
        </Layout>
    );
}
