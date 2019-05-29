// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
    // Some data we can work with
    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
      const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's
      const bornbefore1500 = inventors.filter(inventor => {
        return inventor.year >= 1500 && inventor.year < 1600;
      });
      //console.log(bornbefore1500);


      // Array.prototype.map()
      // 2. Give us an array of the inventors' first and last names
      const nameInventors = inventors.map(inventor => {
        return {first: inventor.first, last: inventor.last}
      });
      //console.log(nameInventors);

      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest
      const oldToYoung = inventors.sort((inven1, inven2) => {
        return inven1.year - inven2.year;
      });
      //console.log(oldToYoung);

      // Array.prototype.reduce()
      // 4. How many years did all the inventors live?
      const totlaLife = inventors.reduce((acc, cur)=>{
        return acc + cur.passed - cur.year;
      },0);
      //console.log(totlaLife);

      // 5. Sort the inventors by years lived
      const yearLivedSort = inventors.sort((a, b) => {
        var a_age = a.passed - a.year;
        var b_age = b.passed - b.year;

        return a_age > b_age ? 1 : -1;
      });
      //console.log(yearLivedSort);
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      const x = document.querySelector('.mw-category')
      const y = x.querySelectorAll('a');
      const z = z = [...y];
      const final = z.filter(item => {
        return item.textContent.includes('de');
      }).map(item => {
        return item.textContent;
      });

      // 7. sort Exercise
      // Sort the people alphabetically by last name
      const nameWise = people.sort((a,b) => {
        x = a.split(' ')[0][1];
        y = b.split(' ')[0][1];
        return x>y?-1:1;
      });

      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      const sum = data.reduce((acc, cur)=>{
        if (!acc[cur]) {
          acc[cur] = 1;
        } else {
          acc[cur]+=1;
        }

        return acc;
      }, {});
      console.log(sum);