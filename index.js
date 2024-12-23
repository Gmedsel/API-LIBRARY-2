window.onload = function() {
    // Predefined books for each genre
    const predefinedBooks = {
        'Anime': [
            {
                title: 'Naruto: The Seventh Hokage and the Scarlet Spring',
                authors: ['Masashi Kishimoto'],
                publisher: 'VIZ Media',
                description: 'A story about Naruto Uzumaki and his journey to become the strongest Hokage.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7988916-L.jpg' }
            },
            {
                title: 'Attack on Titan: No Regrets',
                authors: ['Hajime Isayama'],
                publisher: 'Kodansha',
                description: 'The origin story of Levi Ackerman, one of the greatest soldiers in the world.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7613095-L.jpg' }
            },
            {
                title: 'Fullmetal Alchemist',
                authors: ['Hiromu Arakawa'],
                publisher: 'VIZ Media',
                description: 'The story of two brothers, Edward and Alphonse Elric, on their quest to recover their bodies.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7080030-L.jpg' }
            },
            {
                title: 'One Piece: Pirate King',
                authors: ['Eiichiro Oda'],
                publisher: 'Shueisha',
                description: 'The adventures of Monkey D. Luffy and his quest to become the King of the Pirates.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7638984-L.jpg' }
            },
            {
                title: 'Dragon Ball Z: The Super Saiyan Saga',
                authors: ['Akira Toriyama'],
                publisher: 'VIZ Media',
                description: 'Goku and his friends must defend Earth from powerful foes in this legendary action-packed manga.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7459372-L.jpg' }
            }
        ],
        'Love': [
            {
                title: 'Pride and Prejudice',
                authors: ['Jane Austen'],
                publisher: 'T. Egerton, Whitehall',
                description: 'A romantic novel of manners, following Elizabeth Bennet and her relationships.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/8583237-L.jpg' }
            },
            {
                title: 'The Fault in Our Stars',
                authors: ['John Green'],
                publisher: 'Dutton Books',
                description: 'A love story between two cancer-stricken teens, Hazel Grace Lancaster and Augustus Waters.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7752342-L.jpg' }
            },
            {
                title: 'Me Before You',
                authors: ['Jojo Moyes'],
                publisher: 'Pamela Dorman Books',
                description: 'The poignant love story between Louisa Clark and Will Traynor.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/8280289-L.jpg' }
            },
            {
                title: 'The Notebook',
                authors: ['Nicholas Sparks'],
                publisher: 'Warner Books',
                description: 'A love story that follows Noah and Allie through their ups and downs as they rekindle their romance.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/10465412-L.jpg' }
            },
            {
                title: 'Twilight',
                authors: ['Stephenie Meyer'],
                publisher: 'Little, Brown and Company',
                description: 'The intense love story between a mortal girl and a vampire in this paranormal romance.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/10465401-L.jpg' }
            }
        ],
        'Horror': [
            {
                title: 'Dracula',
                authors: ['Bram Stoker'],
                publisher: 'Archibald Constable and Company',
                description: 'A gothic horror novel about Count Dracula and his attempt to move from Transylvania to England.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7984915-L.jpg' }
            },
            {
                title: 'The Shining',
                authors: ['Stephen King'],
                publisher: 'Doubleday',
                description: 'A terrifying story about a family trapped in a haunted hotel.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/8882426-L.jpg' }
            },
            {
                title: 'Frankenstein',
                authors: ['Mary Shelley'],
                publisher: 'Lackington, Hughes, Harding, Mavor & Jones',
                description: 'A young scientist creates a creature in an unorthodox and dangerous experiment.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7790201-L.jpg' }
            },
            {
                title: 'It',
                authors: ['Stephen King'],
                publisher: 'Viking Penguin',
                description: 'A group of friends confront a shape-shifting entity that has been terrorizing their town for decades.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/8825861-L.jpg' }
            },
            {
                title: 'The Haunting of Hill House',
                authors: ['Shirley Jackson'],
                publisher: 'Houghton Mifflin',
                description: 'A chilling tale about a group of people who stay at a supposedly haunted mansion.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7586893-L.jpg' }
            }
        ],
        'Action': [
            {
                title: 'The Hunger Games',
                authors: ['Suzanne Collins'],
                publisher: 'Scholastic Press',
                description: 'In a dystopian future, Katniss Everdeen must participate in a televised death match known as the Hunger Games.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/6581746-L.jpg' }
            },
            {
                title: 'The Bourne Identity',
                authors: ['Robert Ludlum'],
                publisher: 'Richard Marek Publishers',
                description: 'A man with amnesia tries to piece together his identity while being pursued by assassins.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7302183-L.jpg' }
            },
            {
                title: 'Die Hard: The Ultimate Good Guy',
                authors: ['Jeffery Deaver'],
                publisher: 'HarperCollins',
                description: 'John McClane is back in this action-packed novel inspired by the popular movie franchise.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/6805092-L.jpg' }
            },
            {
                title: 'The Maze Runner',
                authors: ['James Dashner'],
                publisher: 'Delacorte Press',
                description: 'A group of teenagers must navigate a deadly maze in this fast-paced action thriller.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/6831217-L.jpg' }
            },
            {
                title: 'Mission Impossible: Fallout',
                authors: ['Christoper McQuarrie'],
                publisher: 'Tom Clancy',
                description: 'Ethan Hunt faces a deadly foe in this high-octane action-packed novelization of the film.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/9192322-L.jpg' }
            }
        ],
        'Comedy': [
            {
                title: 'The Hitchhiker\'s Guide to the Galaxy',
                authors: ['Douglas Adams'],
                publisher: 'Pan Books',
                description: 'A satirical science fiction series that follows Arthur Dent as he navigates the galaxy.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7958251-L.jpg' }
            },
            {
                title: 'Good Omens',
                authors: ['Neil Gaiman', 'Terry Pratchett'],
                publisher: 'Gollancz',
                description: 'A comedic tale about an angel and demon teaming up to prevent Armageddon.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/8431075-L.jpg' }
            },
            {
                title: 'Catch-22',
                authors: ['Joseph Heller'],
                publisher: 'Simon & Schuster',
                description: 'A darkly comedic novel set during World War II, following a U.S. Army Air Corps captain.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/8908550-L.jpg' }
            },
            {
                title: 'The Importance of Being Earnest',
                authors: ['Oscar Wilde'],
                publisher: 'Lippincott',
                description: 'A satirical play about mistaken identities, social obligations, and farcical romantic entanglements.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/6453936-L.jpg' }
            },
            {
                title: 'Bridget Jones\'s Diary',
                authors: ['Helen Fielding'],
                publisher: 'Picador',
                description: 'A comedic and somewhat tragic portrayal of a single woman in her 30s, navigating life and love.',
                imageLinks: { thumbnail: 'https://covers.openlibrary.org/b/id/7484127-L.jpg' }
            }
        ]
    };

    // Function to display predefined books
    function displayPredefinedBooks() {
        const resultsContainer = document.getElementById('results');
        resultsContainer.innerHTML = '';  // Clear previous results

        // Loop through predefined books
        for (const genre in predefinedBooks) {
            const books = predefinedBooks[genre];
            const genreHeader = document.createElement('h2');
            genreHeader.innerText = `${genre} Books:`;
            resultsContainer.appendChild(genreHeader);

            books.forEach(book => {
                const bookElement = document.createElement('div');
                bookElement.classList.add('book-item');
                bookElement.onclick = () => openModal(book);

                const title = book.title || 'No title available';
                const authors = book.authors ? book.authors.join(', ') : 'Unknown author';
                const publisher = book.publisher || 'Unknown publisher';
                const description = book.description || 'No description available';
                const imageUrl = book.imageLinks ? book.imageLinks.thumbnail : 'https://via.placeholder.com/150';

                bookElement.innerHTML = `
                    <img src="${imageUrl}" alt="Book Cover">
                    <h3>${title}</h3>
                    <p><strong>Authors:</strong> ${authors}</p>
                    <p><strong>Publisher:</strong> ${publisher}</p>
                    <p><strong>Description:</strong> ${description}</p>
                `;

                resultsContainer.appendChild(bookElement);
            });
        }
    }

    // Display predefined books for all genres
    displayPredefinedBooks();
};
