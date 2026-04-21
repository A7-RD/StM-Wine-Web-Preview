/* eslint-disable @next/next/no-img-element */
/**
 * All 9 spreads of the St. Martin's Wine List, rendered as server components.
 * Shared between the on-screen preview (/) and the chrome-free print route (/print).
 *
 * Intentionally uses plain <img> tags: the layout relies on exact
 * calc(... * var(--pt)) dimensions for print fidelity, which conflicts with
 * next/image's optimization pipeline. Keeping raw <img> preserves 1:1 geometry
 * and keeps the static export portable.
 *
 * Content is a 1:1 port of index.html. Do not reformat without a visual diff
 * against assets/pdf-raster/page-XX.png via the PdfDebugOverlay.
 */
export function Spreads() {
  return (
    <>
      {/* Spread 0: Page I (cover, single right-hand) */}
      <section className="spread single right" aria-label="Spread 1 — Cover">
        <article className="page page-cover" aria-label="Page I" data-pdf-page="1">
          <div className="cover-logo-plate">
            <img src="/assets/wordmark.svg" alt="St. Martin's Wine Bistro" />
          </div>
        </article>
      </section>

      {/* Spread 1: Pages II + III */}
      <section className="spread" aria-label="Spread 2 — Classics / By the Bottle">
        <article className="page page-classics" aria-label="Page II" data-pdf-page="2">
          <h2 className="section-h classics-head">St. Martin’s Classics</h2>

          <div className="cocktail-list">
            <div className="cocktail">
              <div className="row"><span className="name">Vieux Carré</span><span className="price">$17</span></div>
              <div className="ing">Unbendt Rye Whiskey, Pierre Ferrand Cognac 1840, Bénédictine, Carpano Classico Sweet Vermouth, Angostura, Peychaud’s</div>
            </div>
            <div className="cocktail">
              <div className="row"><span className="name">Boulevardier</span><span className="price">$15</span></div>
              <div className="ing">Bourbon, Campari, Sweet Vermouth</div>
            </div>
            <div className="cocktail">
              <div className="row"><span className="name">Le Forum</span><span className="price">$15</span></div>
              <div className="ing">Citadelle Gin, Noilly Prat Dry Vermouth, Grand Marnier</div>
            </div>
            <div className="cocktail">
              <div className="row"><span className="name">French Martini</span><span className="price">$16</span></div>
              <div className="ing">Grey Goose Vodka, Fleur Charmante, Pineapple</div>
            </div>
            <div className="cocktail">
              <div className="row"><span className="name">1789</span><span className="price">$17</span></div>
              <div className="ing">Brenne Single Malt Whiskey, Bonal Aperitif, Tempus Fugit Kina L’Avion D’Or</div>
            </div>
            <div className="cocktail">
              <div className="row"><span className="name">Mauresque</span><span className="price">$15</span></div>
              <div className="ing">Ricard Pastis De Marseille, Liquid Alchemist Orgeat, Water</div>
            </div>
            <div className="cocktail">
              <div className="row"><span className="name">The Rose</span><span className="price">$16</span></div>
              <div className="ing">Alessio Dry Vermouth, Schladerer Kirschwasser Cherry Brandy, Chambord</div>
            </div>
            <div className="cocktail">
              <div className="row"><span className="name">French 75</span><span className="price">$16</span></div>
              <div className="ing">G’Vine Floraison Gin or Martell Swift Cognac, Lemon, Champagne</div>
            </div>
          </div>

          <div className="beer-aperitif">
            <div>
              <h3 className="section-h">Beer</h3>
              <ul className="wine-list plain">
                <li><span className="name">Stella Artois, Belgium</span><span className="price">$8</span></li>
                <li><span className="name">La Fin Du Monde, Canada</span><span className="price">$10</span></li>
                <li><span className="name">Community IPA, <em>Local</em></span><span className="price">$8</span></li>
                <li><span className="name">Kronenbourg 1664, France</span><span className="price">$8</span></li>
                <li><span className="name">Negra Modelo, Mexico</span><span className="price">$8</span></li>
                <li><span className="name">Miller Lite, USA</span><span className="price">$7</span></li>
                <li><span className="name">Athletic Brewery, USA</span><span className="price">$6</span></li>
              </ul>
            </div>
            <div>
              <h3 className="section-h">Apéritif</h3>
              <ul className="wine-list plain">
                <li><span className="name">Aperol</span><span className="price">$12</span></li>
                <li><span className="name">Bonal Gentiane-Quina</span><span className="price">$11</span></li>
                <li><span className="name">Ricard Pastis</span><span className="price">$12</span></li>
                <li><span className="name">Suze</span><span className="price">$11</span></li>
                <li><span className="name">Tempus Fugit Kina L’Avion D’Or</span><span className="price">$12</span></li>
                <li><span className="name">Tempus Fugit Gran Classico</span><span className="price">$12</span></li>
                <li><span className="name">Campari</span><span className="price">$12</span></li>
              </ul>
            </div>
          </div>

          <div className="louis-row">
            <div className="label">Louis XIII</div>
            <div className="tiers">
              <div className="h">Half Ounce</div>
              <div className="h">One Ounce</div>
              <div className="h">Two Ounces</div>
              <div className="v">$125</div>
              <div className="v">$250</div>
              <div className="v">$500</div>
            </div>
          </div>

          <div className="folio">II</div>
        </article>

        <article className="page page-divider" aria-label="Page III" data-pdf-page="3">
          <div className="top-note note-italic">Please note that vintages are subject to change based on availability.</div>
          <div className="art">
            <img src="/assets/waiter_tray.png" alt="" />
          </div>
          <div className="divider-word" aria-label="By the Bottle">
            <span className="lead">BY THE</span>
            <span className="drop">B</span>
            <span className="tail">ottle</span>
          </div>
        </article>
      </section>

      {/* Spread 2: Pages IV + V */}
      <section className="spread" aria-label="Spread 3 — Champagne / White Wines">
        <article className="page" aria-label="Page IV" data-pdf-page="4">
          <h2 className="section-h">Champagne &amp; Sparkling Wines</h2>
          <ol className="bottle-list" start={1}>
            <li className="sub">Champagne</li>
            <li><span className="num">1</span><span className="name">Dom Pérignon Brut, France, 2013</span><span className="price">$550</span></li>
            <li><span className="num">2</span><span className="name">Comtes De Champagne Taittinger Blanc De Blancs Brut, France, 2013</span><span className="price">$405</span></li>
            <li><span className="num">3</span><span className="name">Laurent-Perrier Brut, France, 2012</span><span className="price">$225</span></li>
            <li><span className="num">4</span><span className="name">Gosset Grande Réserve Brut, France</span><span className="price">$129</span></li>
            <li><span className="num">5</span><span className="name">Palmer &amp; Co. Réserve Brut, France</span><span className="price">$125</span></li>
            <li><span className="num">6</span><span className="name">Ruinart Blanc De Blancs, France</span><span className="price">$195</span></li>
            <li><span className="num">7</span><span className="name">Bollinger Special Cuvée Brut, France</span><span className="price">$156</span></li>
            <li><span className="num">8</span><span className="name">Telmont Réserve Brut, NV, France</span><span className="price">$139</span></li>
            <li><span className="num">9</span><span className="name">Nicolas Feuillatte Réserve Exclusive Brut, AOC, France</span><span className="price">$119</span></li>

            <li className="sub">Sparkling Rosé</li>
            <li><span className="num">10</span><span className="name">Taittinger Prestige Brut, Champagne, France</span><span className="price">$179</span></li>
            <li><span className="num">11</span><span className="name">Moët &amp; Chandon Imperial Brut, Champagne, France</span><span className="price">$149</span></li>
            <li><span className="num">12</span><span className="name">Prosper Maufoux Brut, Crémant De Bourgogne, NV, France</span><span className="price">$85</span></li>

            <li className="sub">Cava</li>
            <li><span className="num">13</span><span className="name">Blanchard Perez Brut, Spain, (Organic)</span><span className="price">$75</span></li>
          </ol>

          <h2 className="section-h mt-l">White Wines</h2>
          <ol className="bottle-list">
            <li className="sub">California</li>
            <li><span className="num">14</span><span className="name">ZD Wines Chardonnay, Napa Valley, 2023</span><span className="price">$105</span></li>
            <li><span className="num">15</span><span className="name">Far Niente Chardonnay, Napa Valley, 2023</span><span className="price">$115</span></li>
            <li><span className="num">16</span><span className="name">Cakebread Chardonnay, Napa Valley, 2023</span><span className="price">$110</span></li>
            <li><span className="num">17</span><span className="name">Nickel &amp; Nickel Truchard Vineyard Chardonnay, Napa Valley, 2023</span><span className="price">$119</span></li>
            <li><span className="num">18</span><span className="name">Sonoma-Cutrer Les Pierres Chardonnay, Russian River, Sonoma, 2022</span><span className="price">$85</span></li>
            <li><span className="num">19</span><span className="name">Flowers Chardonnay, Sonoma Coast, 2023</span><span className="price">$95</span></li>
            <li><span className="num">20</span><span className="name">Jordan Chardonnay, Alexander Valley, Sonoma, 2022</span><span className="price">$99</span></li>
            <li><span className="num">21</span><span className="name">DuMOL Wester Reach Chardonnay, Russian River, Sonoma, 2022</span><span className="price">$125</span></li>
            <li><span className="num">22</span><span className="name">Knights Bridge Ponte De Chevaliers Sauvignon Blanc, Sonoma, 2022</span><span className="price">$65</span></li>
            <li><span className="num">23</span><span className="name">Opolo Viognier, Paso Robles, 2023</span><span className="price">$65</span></li>
          </ol>

          <div className="folio">IV</div>
        </article>

        <article className="page" aria-label="Page V" data-pdf-page="5">
          <h2 className="section-h">White Wines &amp; Rosé</h2>
          <ol className="bottle-list">
            <li className="sub">Bordeaux</li>
            <li><span className="num">24</span><span className="name">Clos Des Lunes. Lunes Blanche, 2019</span><span className="price">$75</span></li>
            <li><span className="num">25</span><span className="name">Domaines Barons De Rothschild Lafite, Réserve Spéciale, 2022</span><span className="price">$60</span></li>

            <li className="sub">Bourgogne</li>
            <li><span className="num">26</span><span className="name">Château De Meursault, Meursault-Charmes 1<sup>er</sup> Cru Chardonnay, FR, 2021</span><span className="price">$400</span></li>
            <li><span className="num">27</span><span className="name">Meursault, Coeur De Roches, Frédéric Magnien, Chardonnay, France, 2019</span><span className="price">$195</span></li>
            <li><span className="num">28</span><span className="name">Pouilly Fuisse, Louis Latour Chardonnay, France, 2022</span><span className="price">$95</span></li>
            <li><span className="num">29</span><span className="name">Puligny-Montrachet, Louis Latour Chardonnay, France, 2022</span><span className="price">$294</span></li>
            <li><span className="num">30</span><span className="name">Chassagne-Montrachet, Louis Latour Chardonnay, France, 2022</span><span className="price">$225</span></li>
            <li><span className="num">31</span><span className="name">Blanchot Domaine Vecoret &amp; Fils, Chard. Grand Cru Chablis, FR, 2022</span><span className="price">$255</span></li>
            <li><span className="num">32</span><span className="name">Domaine Séguinot-Bordet Chardonnay Chablis, France, 2022</span><span className="price">$66</span></li>
            <li><span className="num">33</span><span className="name">Château De Messey, Mâcon-Cruzille Clos Des Avoueries Monopole, FR, 2021</span><span className="price">$89</span></li>
            <li><span className="num">34</span><span className="name">Pierre-Henri Rougeot, Chassagne-Montrachet Le Paradis, France, 2022</span><span className="price">$309</span></li>
            <li><span className="num">35</span><span className="name">Prosper Maufoux Mâcon-Villages Chardonnay, France, 2022</span><span className="price">$75</span></li>

            <li className="sub">Loire Valley</li>
            <li><span className="num">36</span><span className="name">Domaine Reverdy Ducroux Sancerre, AOP, France, 2023</span><span className="price">$75</span></li>
            <li><span className="num">37</span><span className="name">Alphonse Mellot Sancerre La Moussiere, France, 2023</span><span className="price">$109</span></li>
            <li><span className="num">38</span><span className="name">Domaine Du Pré Semelé Sancerre Blanc, France, 2022</span><span className="price">$95</span></li>
            <li><span className="num">39</span><span className="name">François Crochet Sancerre Les Perrois, France, 2023</span><span className="price">$83</span></li>

            <li className="sub">Provence</li>
            <li><span className="num">40</span><span className="name">Château Peyrassol Rosé, France, 2023</span><span className="price">$75</span></li>

            <li className="sub">Germany</li>
            <li><span className="num">41</span><span className="name">Schloss Vollards Special Select, Spätlese Riesling, 2021</span><span className="price">$85</span></li>
            <li><span className="num">42</span><span className="name">August Kesseler Lorch, Trocken Riesling, 2022</span><span className="price">$70</span></li>

            <li className="sub">Italy</li>
            <li><span className="num">43</span><span className="name">La Scolca “Black Label” Gavi Dei Gavi Cortese, DOCG, 2023</span><span className="price">$95</span></li>
            <li><span className="num">44</span><span className="name">Abbazia Di Novacella, Alto Adige Valle Isarco Pinot Gregio, 2024</span><span className="price">$55</span></li>

            <li className="sub">New Zealand</li>
            <li><span className="num">45</span><span className="name">OTU Sauvignon Blanc, Marlborough, New Zealand, 2023</span><span className="price">$66</span></li>
          </ol>

          <div className="folio">V</div>
        </article>
      </section>

      {/* --- Spreads 3-8 appended below --- */}
      <SpreadsRedAndBeyond />
    </>
  );
}

function SpreadsRedAndBeyond() {
  return (
    <>
      {/* Spread 3: Pages VI + VII (Red Wines, part 1) */}
      <section className="spread" aria-label="Spread 4 — Red Wines">
        <article className="page" aria-label="Page VI" data-pdf-page="6">
          <h2 className="section-h">Red Wines</h2>
          <ol className="bottle-list">
            <li className="sub">Australia</li>
            <li><span className="num">46</span><span className="name">Penfolds Bin 600 Cabernet Sauvignon/Shiraz, Barossa Valley, 2019</span><span className="price">$85</span></li>
            <li><span className="num">47</span><span className="name">Penfolds Grange Shiraz/Cabernet Sauvignon, Barossa Valley, 2019</span><span className="price">$1395</span></li>
            <li><span className="num">48</span><span className="name">Hickinbotham Brooks Rd Shiraz, McLaren Vale, 2019</span><span className="price">$149</span></li>

            <li className="sub">Argentina</li>
            <li><span className="num">49</span><span className="name">Teho Malbec, Mendoza, 2019</span><span className="price">$90</span></li>
            <li><span className="num">50</span><span className="name">Altocedro Gran Reserva Malbec, Mendoza, 2022</span><span className="price">$105</span></li>
            <li><span className="num">51</span><span className="name">Luigi Bosca Malbec, Luján De Cuyo, Mendoza, 2022</span><span className="price">$80</span></li>
            <li><span className="num">52</span><span className="name">Imposible Malbec, Vistaflores, Mendoza, 2022</span><span className="price">$69</span></li>

            <li className="sub">Chile</li>
            <li><span className="num">53</span><span className="name">Seña Cabernet Sauvignon, Aconcagua Valley, 2021</span><span className="price">$298</span></li>
            <li><span className="num">54</span><span className="name">Viñedo Chadwick Cabernet Sauvignon, Maipo, 2018</span><span className="price">$585</span></li>
            <li><span className="num">55</span><span className="name">KAI Carmenere, Aconcagua Valley, 2018</span><span className="price">$179</span></li>

            <li className="sub">California</li>
            <li><span className="num">56</span><span className="name">Darius II Cabernet Sauvignon, Napa Valley, 2021</span><span className="price">$715</span></li>
            <li><span className="num">57</span><span className="name">Opus One Cabernet Sauvignon, Napa Valley, 2021</span><span className="price">$675</span></li>
            <li><span className="num">58</span><span className="name">Caymus Cabernet Sauvignon, Napa Valley, 2022</span><span className="price">$175</span></li>
            <li><span className="num">59</span><span className="name">Continuum Cabernet Sauvignon, Napa Valley, 2021</span><span className="price">$586</span></li>
            <li><span className="num">60</span><span className="name">Dariush Cabernet Sauvignon, Napa Valley, 2021</span><span className="price">$270</span></li>
            <li><span className="num">61</span><span className="name">Rombauer Cabernet Sauvignon, Napa Valley, 2022</span><span className="price">$125</span></li>
            <li><span className="num">62</span><span className="name">Jayson by Pahlmeyer Cabernet Sauvignon, Napa Valley, 2021</span><span className="price">$189</span></li>
            <li><span className="num">63</span><span className="name">Cakebread Cellars Cabernet Sauvignon, Napa Valley, 2021</span><span className="price">$175</span></li>
            <li><span className="num">64</span><span className="name">Nickel &amp; Nickel Cabernet Sauvignon, Vaca Vista, Napa Valley, 2022</span><span className="price">$187</span></li>
            <li><span className="num">65</span><span className="name">Heitz Cellar Cabernet Sauvignon, Napa Valley, 2019</span><span className="price">$105</span></li>
            <li><span className="num">66</span><span className="name">Miner Cabernet Sauvignon, Napa Valley, 2019</span><span className="price">$114</span></li>
            <li><span className="num">67</span><span className="name">Patent Wines Cabernet Sauvignon, Napa Valley, 2020</span><span className="price">$118</span></li>
            <li><span className="num">68</span><span className="name">Double Diamond Cabernet Sauvignon, Napa Valley, 2021</span><span className="price">$219</span></li>
            <li><span className="num">69</span><span className="name">Overture Cabernet Sauvignon, Napa Valley, 2019</span><span className="price">$335</span></li>
            <li><span className="num">70</span><span className="name">Schrader Cabernet Sauvignon, Napa Valley, 2019</span><span className="price">$755</span></li>
            <li><span className="num">71</span><span className="name">Austin Hope Cabernet Sauvignon, Paso Robles, 2021</span><span className="price">$135</span></li>
            <li><span className="num">72</span><span className="name">Jordan Cabernet Sauvignon, Alexander Valley, Sonoma, 2020</span><span className="price">$115</span></li>
            <li><span className="num">73</span><span className="name">Silver Oak Cabernet Sauvignon, Alexander Valley, Sonoma, 2019</span><span className="price">$194</span></li>
            <li><span className="num">74</span><span className="name">Barnett Vineyards Cab. Sauvignon, Spring Mountain, St. Helena, 2022</span><span className="price">$159</span></li>
            <li><span className="num">75</span><span className="name">Knights Bridge Knights Valley Cabernet Sauvignon, Sonoma, 2019</span><span className="price">$255</span></li>
          </ol>
          <div className="folio">VI</div>
        </article>

        <article className="page" aria-label="Page VII" data-pdf-page="7">
          <h2 className="section-h">Red Wines</h2>
          <ol className="bottle-list">
            <li className="sub">Red Blend</li>
            <li><span className="num">76</span><span className="name">Papillon, Napa Valley, 2022</span><span className="price">$155</span></li>
            <li><span className="num">77</span><span className="name">Stringer Metal Bender, Stringer Cellars, Napa Valley, 2021</span><span className="price">$93</span></li>
            <li><span className="num">78</span><span className="name">B.V. Tapestry, Beaulieu Vineyards, Napa Valley, 2019</span><span className="price">$99</span></li>
            <li><span className="num">79</span><span className="name">Scout’s Honor Proprietary Red, Venge Vineyards, Napa Valley, 2021</span><span className="price">$110</span></li>

            <li className="sub">Merlot</li>
            <li><span className="num">80</span><span className="name">Peju Winery, Napa Valley, 2021</span><span className="price">$99</span></li>
            <li><span className="num">81</span><span className="name">Grgich Hills Estate, Estate Grown, Napa Valley, 2020</span><span className="price">$125</span></li>
            <li><span className="num">82</span><span className="name">Snowden, Napa Valley, 2022</span><span className="price">$117</span></li>
            <li><span className="num">83</span><span className="name">Pride, Napa Valley, 2021</span><span className="price">$149</span></li>

            <li className="sub">Pinot Noir</li>
            <li><span className="num">84</span><span className="name">Stargazing, Summer Dreams, Sonoma, 2022</span><span className="price">$177</span></li>
            <li><span className="num">85</span><span className="name">Belle Glos, Clark &amp; Telephone, Santa Maria Valley, 2023</span><span className="price">$95</span></li>
            <li><span className="num">86</span><span className="name">Flowers, Sonoma Coast, 2022</span><span className="price">$95</span></li>
            <li><span className="num">87</span><span className="name">DuMOL, Russian River, Sonoma, 2023</span><span className="price">$105</span></li>
            <li><span className="num">88</span><span className="name">Baby Blue, Blue Rock Vineyard, Petaluma Gap, 2020</span><span className="price">$117</span></li>

            <li className="sub">Petite Sirah</li>
            <li><span className="num">89</span><span className="name">Stags’ Leap, Napa Valley, 2020</span><span className="price">$93</span></li>
            <li><span className="num">90</span><span className="name">Green &amp; Red Vineyards, Tip Top Vineyards, Napa Valley, 2021</span><span className="price">$95</span></li>

            <li className="sub">Red Zinfandel</li>
            <li><span className="num">91</span><span className="name">Old Ghost Old Vine, Lodi, 2021</span><span className="price">$95</span></li>
            <li><span className="num">92</span><span className="name">Limerick Lane 1910 Block, Russian River Valley, 2020</span><span className="price">$150</span></li>

            <li className="sub">Bourgogne</li>
            <li><span className="num">93</span><span className="name">Louis Latour Pommard, France, 2020</span><span className="price">$185</span></li>
            <li><span className="num">94</span><span className="name">Maison Champy Edme, Rouge, France, 2023</span><span className="price">$95</span></li>
            <li><span className="num">95</span><span className="name">Domaine Gérard Seguin, Vieilles Vignes Gevery-Chambertin, AOP, FR, 2021</span><span className="price">$150</span></li>
            <li><span className="num">96</span><span className="name">Givry 1er Cru La Plante, Danjean Berthoux, France, 2022</span><span className="price">$90</span></li>
            <li><span className="num">97</span><span className="name">Pierre-Henri Rougeot, Gevrey-Chambertin En Reniard, France, 2022</span><span className="price">$297</span></li>
            <li><span className="num">98</span><span className="name">Henri De Villamont, Prestige, France, 2021</span><span className="price">$72</span></li>
          </ol>
          <div className="folio">VII</div>
        </article>
      </section>

      {/* Spread 4: Pages VIII + IX (Red Wines, part 2) */}
      <section className="spread" aria-label="Spread 5 — Red Wines (cont.)">
        <article className="page" aria-label="Page VIII" data-pdf-page="8">
          <h2 className="section-h">Red Wines</h2>
          <ol className="bottle-list">
            <li className="sub">Bordeaux</li>
            <li><span className="num">99</span><span className="name">Château Gruaud Larose, Saint-Julien, France, 2020</span><span className="price">$260</span></li>
            <li><span className="num">100</span><span className="name">Château Talbot, Saint-Julien, France, 2020</span><span className="price">$250</span></li>
            <li><span className="num">101</span><span className="name">Château Gloria, Saint-Julien, France, 2019</span><span className="price">$118</span></li>
            <li><span className="num">102</span><span className="name">Château Lagrange 3<sup>ème</sup>, Grand Cru Classé, Saint-Julien, FR, 2018</span><span className="price">$174</span></li>
            <li><span className="num">103</span><span className="name">Château Tronquoy-Lalande, St. Estèphe, France, 2020</span><span className="price">$125</span></li>
            <li><span className="num">104</span><span className="name">Château Lafon-Rochet, St. Estèphe, France, 2021</span><span className="price">$130</span></li>
            <li><span className="num">105</span><span className="name">Château Meyney, St. Estèphe, AOC, France, 2021</span><span className="price">$117</span></li>
            <li><span className="num">106</span><span className="name">Château Du Tertre Margaux, France, 2017</span><span className="price">$165</span></li>
            <li><span className="num">107</span><span className="name">Château Brane-Cantenac, Margaux, France, 2021</span><span className="price">$149</span></li>
            <li><span className="num">108</span><span className="name">Château Ferriere, Margaux, France, 2019</span><span className="price">$145</span></li>
            <li><span className="num">109</span><span className="name">Château D’Issan, Blason D’Isson, Margaux, France, 2020</span><span className="price">$102</span></li>
            <li><span className="num">110</span><span className="name">Château Dufort Vivens, Margaux, France, 2017</span><span className="price">$194</span></li>
            <li><span className="num">111</span><span className="name">Château Lynch Bages Grand Cru Classé, Pauillac, France 2021</span><span className="price">$359</span></li>
            <li><span className="num">112</span><span className="name">Château Pichon Baron Longueville 2<sup>ème</sup> Cru Classé, Pauillac, FR, 2018</span><span className="price">$585</span></li>
            <li><span className="num">113</span><span className="name">Château Belgrave 5<sup>ème</sup> Grand Cru Classé, Haut-Médoc, France, 2017</span><span className="price">$139</span></li>
            <li><span className="num">114</span><span className="name">Château Pape Clément Grand Cru Classé De Graves, Pessac-Léognan, 2020</span><span className="price">$288</span></li>
            <li><span className="num">115</span><span className="name">Château D’Auiguilhe, Côtes De Castillon Rouge, France, 2019</span><span className="price">$102</span></li>
            <li><span className="num">116</span><span className="name">Château Vieux Chevrol, Lalande-de-Pomerol, AOC, France, 2020</span><span className="price">$119</span></li>
            <li><span className="num">117</span><span className="name">Château Petit Village, Pomerol Le Jardin De Petit-Village, FR, 2020</span><span className="price">$149</span></li>
            <li><span className="num">118</span><span className="name">Château Bellevue Mondotte, Saint-Émilion, France, 2007</span><span className="price">$406</span></li>
            <li><span className="num">119</span><span className="name">Château Puy-Blanquet Grand Cru, Saint-Émilion, France, 2020</span><span className="price">$120</span></li>
            <li><span className="num">120</span><span className="name">Clos Cantenac, Grand Cru, Saint-Émilion, France, 2019</span><span className="price">$177</span></li>
            <li><span className="num">121</span><span className="name">Château Canon-la-Gaffelière 1er Grand Cru Classé, Saint-Émilion, 2016</span><span className="price">$390</span></li>
            <li><span className="num">122</span><span className="name">Clos De L’Oratoire Grand Cru Classé, Saint-Émilion, France, 2020</span><span className="price">$171</span></li>
            <li><span className="num">123</span><span className="name">Château Angelus 1er Grand Cru Classé “A”, Saint-Émilion, France, 2014</span><span className="price">$1487</span></li>

            <li className="sub">Côtes du Rhône</li>
            <li><span className="num">124</span><span className="name">Domaine Brun Avril, Châteauneuf-du-Pape, France, 2020</span><span className="price">$145</span></li>
            <li><span className="num">125</span><span className="name">Domaine André Brunel, Châteauneuf-du-Pape, Les Cailloux, France, 2021</span><span className="price">$160</span></li>
            <li><span className="num">126</span><span className="name">Clos Saint Jean, Vielles Vignes, Châteauneuf-du-Pape, France, 2021</span><span className="price">$147</span></li>
            <li><span className="num">127</span><span className="name">Domaine De Beaurenard, Châteauneuf-du-Pape, France, 2021</span><span className="price">$145</span></li>
            <li><span className="num">128</span><span className="name">Clos De L’Oratoire Des Papes, Châteauneuf-du-Pape, France, 2021</span><span className="price">$185</span></li>

            <li className="sub">Lebanon</li>
            <li><span className="num">129</span><span className="name">Châteaux Musar Blend, Bekaa Valley, Lebanon, 2012</span><span className="price">$259</span></li>
            <li><span className="num">130</span><span className="name">Châteaux Ksara Le Souverain, Bekaa Valley, Lebanon, 2017</span><span className="price">$99</span></li>
          </ol>
          <div className="folio">VIII</div>
        </article>

        <article className="page" aria-label="Page IX" data-pdf-page="9">
          <h2 className="section-h">Red Wines</h2>
          <ol className="bottle-list">
            <li className="sub">Italy</li>
            <li><span className="num">131</span><span className="name">Poggio all’Oro Brunello Di Montalcino, DOCG, Riserva, Sangiovese, 2016</span><span className="price">$425</span></li>
            <li><span className="num">132</span><span className="name">Ridolfi Brunello Di Montalcino DOCG, Sangiovese, 2019</span><span className="price">$108</span></li>
            <li><span className="num">133</span><span className="name">Poggio alle Mura Brunello Di Montalcino DOCG, Sangiovese, 2018</span><span className="price">$185</span></li>
            <li><span className="num">134</span><span className="name">Collazzi Rosso, Toscana IGT, 2020</span><span className="price">$126</span></li>
            <li><span className="num">135</span><span className="name">Cesari Amarone Della Valpolicella Classico, Venetian, 2019</span><span className="price">$119</span></li>
            <li><span className="num">136</span><span className="name">Le Vasche, Montepulciano, Caprera, 2021</span><span className="price">$85</span></li>
            <li><span className="num">137</span><span className="name">Fontanabianca, Barbaresco DOCG, Nebbiolo, 2021</span><span className="price">$90</span></li>
            <li><span className="num">138</span><span className="name">Mirafiore, Barolo DOCG, Nebbiolo, 2020</span><span className="price">$117</span></li>

            <li className="sub">Oregon</li>
            <li><span className="num">139</span><span className="name">Bergström Cumberland Reserve Pinot Noir, Willamette Valley, 2022</span><span className="price">$109</span></li>
            <li><span className="num">140</span><span className="name">Rex Hill Pinot Noir, Willamette Valley, 2021</span><span className="price">$95</span></li>
            <li><span className="num">141</span><span className="name">Van Duzer Elemental Reserve Pinot Noir, Willamette Valley, 2021</span><span className="price">$120</span></li>

            <li className="sub">Spain</li>
            <li><span className="num">142</span><span className="name">Marques De Riscal Gran Reserva DOCa, Rioja, 2021</span><span className="price">$149</span></li>
            <li><span className="num">143</span><span className="name">Viña Ardanza Reserva, La Rioja Alta DOCa, 2017</span><span className="price">$94</span></li>
            <li><span className="num">144</span><span className="name">Cune, Rioja Gran Reserva, 2017</span><span className="price">$69</span></li>

            <li className="sub">South Africa</li>
            <li><span className="num">145</span><span className="name">Beaumont Pinotage, Walker Bay, 2021</span><span className="price">$75</span></li>

            <li className="sub">Texas</li>
            <li><span className="num">146</span><span className="name">William Chris Mourvèdre, Texas High Plains, 2021</span><span className="price">$75</span></li>
            <li><span className="num">147</span><span className="name">Skeleton Key Cabernet Sauvignon, Malbec, 2022</span><span className="price">$85</span></li>

            <li className="sub">Washington</li>
            <li><span className="num">148</span><span className="name">Thick Skinned Bordeaux Blend, Red Mountain, 2019</span><span className="price">$76</span></li>
            <li><span className="num">149</span><span className="name">L’Ecole No. 41 Merlot, Columbia Valley, 2021</span><span className="price">$75</span></li>
          </ol>

          <h2 className="section-h mt-m">Orange Wine</h2>
          <ol className="bottle-list">
            <li><span className="num">150</span><span className="name">Antiquum Farm, Willamette Valley, Pinot Gris, Oregon, 2023</span><span className="price">$87</span></li>
          </ol>

          <div className="non-alc-footer"><span className="mark">Non-Alcoholic Wines</span> are available.</div>
          <div className="folio">IX</div>
        </article>
      </section>

      {/* Spread 5: Pages X + XI (By the Glass) */}
      <section className="spread" aria-label="Spread 6 — By the Glass">
        <article className="page page-glass" aria-label="Page X" data-pdf-page="10">
          <div className="divider-word" aria-label="By the Glass">
            <span className="lead">BY THE</span>
            <span className="drop">G</span>
            <span className="tail">lass</span>
          </div>
          <div className="art">
            <img src="/assets/clinking_glasses.png" alt="" />
          </div>
          <div>
            <h2 className="section-h">Sparkling By The Glass</h2>
            <ul className="wine-list plain">
              <li><span className="name">Telmont Réserve Brut Champagne, France, NV</span><span className="price">$35</span></li>
              <li><span className="name">Nicolas Feuillatte Réserve Exclusive Brut Champagne, AOC, France</span><span className="price">$28</span></li>
              <li><span className="name">Château Moncontour Rosé Brut Crémant De Loire, France</span><span className="price">$16</span></li>
              <li><span className="name">Café De Paris Brut Blanc De Blancs, France</span><span className="price">$16</span></li>
              <li><span className="name">Sartori “Love Story” Sparkling Soave DOC, Italy</span><span className="price">$15</span></li>
              <li><span className="name">La Gioiosa ET Amorosa Prosecco, DOC, Italy</span><span className="price">$15</span></li>
            </ul>
          </div>
          <div className="folio">X</div>
        </article>

        <article className="page page-glass-list" aria-label="Page XI" data-pdf-page="11">
          <h2 className="section-h">White By The Glass</h2>
          <ul className="wine-list plain">
            <li><span className="name">Chalone Vineyards Chardonnay, Napa Valley, 2022</span><span className="price">$16</span></li>
            <li><span className="name">Sancerre, ASC, France, 2023</span><span className="price">$21</span></li>
            <li><span className="name">Nuiton-Beaunoy Bourgogne, France, 2022</span><span className="price">$16</span></li>
            <li><span className="name">Les Sarrins Rosé, Côtes De Provence, France, 2022</span><span className="price">$14</span></li>
            <li><span className="name">Centine Pinot Grigio, Tuscany, Italy, 2023</span><span className="price">$13</span></li>
            <li><span className="name">La Scolca Gavi, DOCG White Label, Cortese, Italy, 2022</span><span className="price">$14</span></li>
            <li><span className="name">Ricossa Moscato d’Asti, DOCG, Italy, 2023</span><span className="price">$15</span></li>
            <li><span className="name">Crowded House Sauvignon Blanc, Marlborough, New Zealand, 2023</span><span className="price">$15</span></li>
            <li><span className="name">Château Ste. Michelle Eroica Riesling, Washington, 2023</span><span className="price">$14</span></li>
          </ul>

          <h2 className="section-h mt-m">Red By The Glass</h2>
          <ul className="wine-list plain">
            <li><span className="name">Riebke Shiraz, Barossa Valley, Australia, 2021</span><span className="price">$16</span></li>
            <li><span className="name">Don Nicanor Malbec, Mendoza, Argentina, 2022</span><span className="price">$16</span></li>
            <li><span className="name">Paul Dolan Vineyards, Cabernet Sauvignon, Mendecino County, 2023</span><span className="price">$16</span></li>
            <li><span className="name">Details Cabernet Sauvignon, Sonoma County, 2021</span><span className="price">$17</span></li>
            <li><span className="name">Pied à Terre Cabernet Sauvignon, Sonoma, 2018</span><span className="price">$25</span></li>
            <li><span className="name">Napa Cellars Merlot, Napa Valley, 2021</span><span className="price">$16</span></li>
            <li><span className="name">Field Recordings Regenerator Red Zinfandel, Paso Robles, 2022</span><span className="price">$16</span></li>
            <li><span className="name">Nuiton-Beaunoy Pinot Noir, Bourgogne, 2022</span><span className="price">$20</span></li>
            <li><span className="name">Evolution Pinot Noir, Willamette Valley, 2023</span><span className="price">$16</span></li>
            <li><span className="name">Châteaux Haut Gaudin, Bordeaux, France, 2019</span><span className="price">$15</span></li>
            <li><span className="name">Château Gazin Rocquencort, Pessac-Leognan Bordeaux, France, 2015</span><span className="price">$22</span></li>
            <li><span className="name">Château Caronnes Ste Gemme, Haut-Médoc Bordeaux, France, 2018</span><span className="price">$18</span></li>
            <li><span className="name">Basilica Cafaggio Single Estate Chianti Classico DOCG, Italy, 2022</span><span className="price">$16</span></li>
            <li><span className="name">Château Malijay, Côtes Du Rhône AOP, France, 2022</span><span className="price">$15</span></li>
          </ul>

          <h2 className="section-h mt-m">Dessert Wine, Ports &amp; Sherry</h2>
          <ul className="wine-list plain">
            <li><span className="name">Château Laribotte Sauternes, ASC, France, 2020</span><span className="price">$21</span></li>
            <li><span className="name">Royal Tokaji Late Harvest, Hungary, 2018</span><span className="price">$18</span></li>
            <li><span className="name">Taylor Fladgate 20 Year Tawny Port, Portugal</span><span className="price">$24</span></li>
            <li><span className="name">Fonseca Porto 10 Year Old, Tawny Port, Portugal</span><span className="price">$20</span></li>
            <li><span className="name">Warre’s Heritage Ruby Porto, Portugal</span><span className="price">$18</span></li>
            <li><span className="name">El Maestro Sierra 15 Year Old Oloroso Sherry, Spain</span><span className="price">$20</span></li>
          </ul>
          <div className="folio">XI</div>
        </article>
      </section>

      <SpreadsSpiritsAndBack />
    </>
  );
}

function SpreadsSpiritsAndBack() {
  return (
    <>
      {/* Spread 6: Pages XII + XIII (Spirits, part 1) */}
      <section className="spread" aria-label="Spread 7 — Spirits">
        <article className="page" aria-label="Page XII" data-pdf-page="12">
          <h2 className="section-h">Spirits List</h2>
          <div className="spirits-flow">
            <h3 className="subsection">Vodka</h3>
            <ul className="wine-list plain">
              <li><span className="name">Chopin</span><span className="price">$13</span></li>
              <li><span className="name">Chopin Wheat</span><span className="price">$13</span></li>
              <li><span className="name">Grey Goose</span><span className="price">$14</span></li>
              <li><span className="name">Ketel One</span><span className="price">$13</span></li>
              <li><span className="name">Tito’s</span><span className="price">$13</span></li>
              <li><span className="name">Townes</span><span className="price">$11</span></li>
              <li><span className="name">Beluga Noble</span><span className="price">$13</span></li>
              <li><span className="name">Belvedere</span><span className="price">$14</span></li>
              <li><span className="name">Haku</span><span className="price">$13</span></li>
              <li><span className="name">Kastra Elion</span><span className="price">$15</span></li>
            </ul>

            <h3 className="subsection">Gin</h3>
            <ul className="wine-list plain">
              <li><span className="name">Bombay Sapphire</span><span className="price">$12</span></li>
              <li><span className="name">Hendrick’s</span><span className="price">$12</span></li>
              <li><span className="name">Sipsmith</span><span className="price">$12</span></li>
              <li><span className="name">Tanqueray</span><span className="price">$12</span></li>
              <li><span className="name">Broker’s</span><span className="price">$11</span></li>
              <li><span className="name">Citadelle</span><span className="price">$12</span></li>
              <li><span className="name">Citadelle Jardin d’Ete Gin</span><span className="price">$12</span></li>
              <li><span className="name">Nolet’s Silver</span><span className="price">$12</span></li>
              <li><span className="name">Botanist</span><span className="price">$13</span></li>
              <li><span className="name">Empress Cucumber Lemon</span><span className="price">$13</span></li>
              <li><span className="name">Isle of Harris</span><span className="price">$14</span></li>
              <li><span className="name">Monkey 47</span><span className="price">$16</span></li>
              <li><span className="name">Bluecoat</span><span className="price">$12</span></li>
              <li><span className="name">No. 3 Gin</span><span className="price">$13</span></li>
            </ul>

            <h3 className="subsection">Rum</h3>
            <ul className="wine-list plain">
              <li><span className="name">Bayou Spiced Rum</span><span className="price">$12</span></li>
              <li><span className="name">Flor De Caña 4 Extra Seco</span><span className="price">$11</span></li>
              <li><span className="name">Ron Zacapa No. 23</span><span className="price">$16</span></li>
              <li><span className="name">Ten to One Caribbean White</span><span className="price">$12</span></li>
              <li><span className="name">Ten to One Caribbean Dark</span><span className="price">$16</span></li>
            </ul>

            <h3 className="subsection">Rye</h3>
            <ul className="wine-list plain">
              <li><span className="name">Rittenhouse</span><span className="price">$11</span></li>
              <li><span className="name">Unbendt Bottled in Bond</span><span className="price">$15</span></li>
              <li><span className="name">Old Forester 100</span><span className="price">$12</span></li>
              <li><span className="name">Woodford</span><span className="price">$13</span></li>
              <li><span className="name">Sagamore Spirit</span><span className="price">$13</span></li>
              <li><span className="name">Bhakta 1928</span><span className="price">$17</span></li>
              <li><span className="name">Basil Hayden Dark Rye</span><span className="price">$14</span></li>
              <li><span className="name">Hemingway</span><span className="price">$18</span></li>
              <li><span className="name">Michter’s</span><span className="price">$15</span></li>
              <li><span className="name">Lasso Motel Cask Strength</span><span className="price">$18</span></li>
            </ul>

            <h3 className="subsection">Bourbon</h3>
            <ul className="wine-list plain">
              <li><span className="name">Basil Hayden</span><span className="price">$14</span></li>
              <li><span className="name">Uncle Nearest 1884</span><span className="price">$14</span></li>
              <li><span className="name">Old Grand-Dad 114</span><span className="price">$13</span></li>
              <li><span className="name">Blanton’s</span><span className="price">$20</span></li>
              <li><span className="name">Buffalo Trace</span><span className="price">$13</span></li>
              <li><span className="name">Jack Daniel’s</span><span className="price">$12</span></li>
              <li><span className="name">Knob Creek</span><span className="price">$13</span></li>
              <li><span className="name">Michter’s</span><span className="price">$15</span></li>
              <li><span className="name">Maker’s Mark</span><span className="price">$12</span></li>
              <li><span className="name">Woodford Reserve</span><span className="price">$13</span></li>
              <li><span className="name">Unbendt Bottled in Bond</span><span className="price">$15</span></li>
              <li><span className="name">Old Grand-Dad</span><span className="price">$11</span></li>
              <li><span className="name">Old Forester 100</span><span className="price">$12</span></li>
              <li><span className="name">Stagg Jr</span><span className="price">$18</span></li>
              <li><span className="name">Heaven’s Door Revelation</span><span className="price">$15</span></li>
              <li><span className="name">Penelope Rosé Cask Finish</span><span className="price">$16</span></li>
              <li><span className="name">Weller Special Reserve</span><span className="price">$13</span></li>
              <li><span className="name">Weller 12yr</span><span className="price">$21</span></li>
              <li><span className="name">Lasso Motel Tokaji Cask Finish</span><span className="price">$16</span></li>
              <li><span className="name">Larceny Barrel Proof</span><span className="price">$15</span></li>
              <li><span className="name">Old Grand-Dad 16yr</span><span className="price">$35</span></li>
              <li><span className="name">Blanton’s Gold</span><span className="price">$45</span></li>
              <li><span className="name">Eagle Rare 10yr</span><span className="price">$18</span></li>
            </ul>

            <h3 className="subsection">Scotch</h3>
            <ul className="wine-list plain">
              <li><span className="name">Aberfeldy 12yr</span><span className="price">$14</span></li>
              <li><span className="name">Ballentine’s 17yr</span><span className="price">$21</span></li>
              <li><span className="name">Dewar’s White Label</span><span className="price">$12</span></li>
            </ul>
          </div>
          <div className="folio">XII</div>
        </article>

        <article className="page page-spirits-cont" aria-label="Page XIII" data-pdf-page="13">
          <div className="spirits-flow">
            <h3 className="subsection">Scotch (cont.)</h3>
            <ul className="wine-list plain">
              <li><span className="name">Compass Box The Spaniard</span><span className="price">$18</span></li>
              <li><span className="name">Glenlivet 12yr</span><span className="price">$16</span></li>
              <li><span className="name">Highland Park 12yr</span><span className="price">$17</span></li>
              <li><span className="name">Johnnie Walker Black</span><span className="price">$14</span></li>
              <li><span className="name">Johnnie Walker Blue</span><span className="price">$73</span></li>
              <li><span className="name">Laphroaig 10yr</span><span className="price">$18</span></li>
              <li><span className="name">Macallan 12yr</span><span className="price">$24</span></li>
              <li><span className="name">Oban 14yr</span><span className="price">$25</span></li>
              <li><span className="name">Balvenie 12yr Double Wood</span><span className="price">$23</span></li>
              <li><span className="name">Balvenie 14yr Caribbean Cask</span><span className="price">$27</span></li>
              <li><span className="name">Aberlour 12yr</span><span className="price">$14</span></li>
              <li><span className="name">Dalmore 12yr</span><span className="price">$21</span></li>
              <li><span className="name">Glenlivet 18yr</span><span className="price">$27</span></li>
              <li><span className="name">Glenlivet Founder’s Reserve</span><span className="price">$14</span></li>
              <li><span className="name">Chivas 12yr</span><span className="price">$12</span></li>
              <li><span className="name">Glen Moray 18yr</span><span className="price">$24</span></li>
              <li><span className="name">Glenmorangie The Nectar d’Or Sauternes Cask</span><span className="price">$16</span></li>
            </ul>

            <h3 className="subsection">Whisky</h3>
            <ul className="wine-list plain">
              <li><span className="name">Brenne French Single Malt</span><span className="price">$17</span></li>
              <li><span className="name">McCarthy’s Oregon Single Malt</span><span className="price">$16</span></li>
              <li><span className="name">Bellevoye Blue French Triple Malt</span><span className="price">$13</span></li>
              <li><span className="name">Bellevoye Grand Grux Triple Malt</span><span className="price">$17</span></li>
              <li><span className="name">Bellevoye Calvados Finish French Triple Malt</span><span className="price">$21</span></li>
            </ul>

            <h3 className="subsection">Japanese</h3>
            <ul className="wine-list plain">
              <li><span className="name">Suntory Toki</span><span className="price">$14</span></li>
              <li><span className="name">Nikka Coffey Grain</span><span className="price">$21</span></li>
              <li><span className="name">Hibiki Harmony</span><span className="price">$26</span></li>
              <li><span className="name">Nikka Miyagikyo</span><span className="price">$29</span></li>
              <li><span className="name">Yamazaki 12yr</span><span className="price">$47</span></li>
            </ul>

            <h3 className="subsection">Agave</h3>
            <ul className="wine-list plain">
              <li><span className="name">Casa Noble: Blanco / Reposado / Añejo</span><span className="price">$14 / $16 / $19</span></li>
              <li><span className="name">Casa Dragones Joven</span><span className="price">$72</span></li>
              <li><span className="name">El Tesoro Bowen House Single Barrel</span><span className="price">$17</span></li>
              <li><span className="name">Arette Blanco</span><span className="price">$11</span></li>
              <li><span className="name">Lalo</span><span className="price">$15</span></li>
              <li><span className="name">Ilegal Joven</span><span className="price">$13</span></li>
              <li><span className="name">Koch Espadin</span><span className="price">$14</span></li>
              <li><span className="name">Clase Azul Reposado</span><span className="price">$49</span></li>
              <li><span className="name">Don Julio 1942</span><span className="price">$46</span></li>
              <li><span className="name">Siete Leguas Blanco</span><span className="price">$15</span></li>
              <li><span className="name">Tequila Ocho Blanco</span><span className="price">$14</span></li>
              <li><span className="name">Tequila Ocho Reposado</span><span className="price">$17</span></li>
              <li><span className="name">Tequila Ocho Añejo</span><span className="price">$22</span></li>
              <li><span className="name">Teremana Blanco</span><span className="price">$13</span></li>
              <li><span className="name">Dulce Vida Añejo Lonestar Edition</span><span className="price">$19</span></li>
              <li><span className="name">Clase Azul Plata</span><span className="price">$38</span></li>
              <li><span className="name">Wild Common Reposado</span><span className="price">$18</span></li>
              <li><span className="name">Komos Añejo Cristalino</span><span className="price">$43</span></li>
              <li><span className="name">Tierra-Noble Exquisito</span><span className="price">$44</span></li>
              <li><span className="name">Jose Cuervo La Familia Extra Añejo</span><span className="price">$57</span></li>
              <li><span className="name">Patron Silver</span><span className="price">$14</span></li>
              <li><span className="name">Patron Gran Burdeos</span><span className="price">$90</span></li>
              <li><span className="name">Arette Artesenal Reposado Single Barrel</span><span className="price">$19</span></li>
            </ul>

            <h3 className="subsection">Brandy / Armagnac / Cognac / Grappa</h3>
            <ul className="wine-list plain">
              <li><span className="name">Bhakta 1980 Armagnac</span><span className="price">$91</span></li>
              <li><span className="name">H by Hine</span><span className="price">$15</span></li>
              <li><span className="name">Pierre Ferrand 1840</span><span className="price">$14</span></li>
              <li><span className="name">Boulard VSOP</span><span className="price">$16</span></li>
              <li><span className="name">Brandy Sainte Louise</span><span className="price">$13</span></li>
              <li><span className="name">Grand Brulot</span><span className="price">$13</span></li>
              <li><span className="name">Hennessy VSOP Privilege</span><span className="price">$19</span></li>
              <li><span className="name">Hennessy XO</span><span className="price">$72</span></li>
              <li><span className="name">Nonino Chardonnay Grappa</span><span className="price">$18</span></li>
              <li><span className="name">Nonino Moscato Grappa</span><span className="price">$18</span></li>
              <li><span className="name">Martell Swift</span><span className="price">$17</span></li>
              <li><span className="name">Remy Martin 1738 Accord Royal</span><span className="price">$19</span></li>
              <li><span className="name">Remy Martin XO</span><span className="price">$59</span></li>
              <li><span className="name">Courvosier VSOP</span><span className="price">$13</span></li>
              <li><span className="name">Laressingle VSOP Armagnac</span><span className="price">$17</span></li>
              <li><span className="name">Tosolini Cividina Grappa</span><span className="price">$12</span></li>
              <li><span className="name">Lecompte 5yr Calvados</span><span className="price">$13</span></li>
              <li><span className="name">Schladerer Kirschwasser Cherry</span><span className="price">$14</span></li>
            </ul>
          </div>
          <div className="folio">XIII</div>
        </article>
      </section>

      {/* Spread 7: Pages XIV + XV (Spirits end + Piano) */}
      <section className="spread" aria-label="Spread 8 — Spirits / Live Piano">
        <article className="page" aria-label="Page XIV" data-pdf-page="14">
          <h2 className="section-h">Spirits List</h2>
          <div className="spirits-flow">
            <h3 className="subsection">Vermouth</h3>
            <ul className="wine-list plain">
              <li><span className="name">Carpano Antica</span><span className="price">$13</span></li>
              <li><span className="name">Carpano Classico</span><span className="price">$10</span></li>
              <li><span className="name">Noilly Prat Dry</span><span className="price">$10</span></li>
              <li><span className="name">Cocchi Extra Dry</span><span className="price">$12</span></li>
              <li><span className="name">Alessio Dry</span><span className="price">$12</span></li>
              <li><span className="name">Foro Rosso Torino</span><span className="price">$11</span></li>
            </ul>

            <h3 className="subsection">Apéritif</h3>
            <ul className="wine-list plain">
              <li><span className="name">Aperol</span><span className="price">$12</span></li>
              <li><span className="name">Bonal Gentiane-Quina</span><span className="price">$11</span></li>
              <li><span className="name">Ricard Pastis</span><span className="price">$12</span></li>
              <li><span className="name">Suze</span><span className="price">$11</span></li>
              <li><span className="name">L.N. Mattei Cap Corse Blanc</span><span className="price">$11</span></li>
              <li><span className="name">Tempus Fugit Kina L’Avion D’Or</span><span className="price">$12</span></li>
              <li><span className="name">Tempus Fugit Gran Classico</span><span className="price">$12</span></li>
              <li><span className="name">Campari</span><span className="price">$12</span></li>
            </ul>

            <h3 className="subsection">Digestif</h3>
            <ul className="wine-list plain">
              <li><span className="name">Cappelletti Pasubio Vino Amaro</span><span className="price">$11</span></li>
              <li><span className="name">Jagermeister</span><span className="price">$11</span></li>
              <li><span className="name">Bigallet China-China</span><span className="price">$13</span></li>
              <li><span className="name">Fernet-Branca</span><span className="price">$12</span></li>
              <li><span className="name">Zucca Rabarbaro</span><span className="price">$12</span></li>
              <li><span className="name">Averna</span><span className="price">$12</span></li>
              <li><span className="name">Amaro Nonino</span><span className="price">$15</span></li>
              <li><span className="name">Drambuie</span><span className="price">$12</span></li>
              <li><span className="name">Romana Sambuca</span><span className="price">$12</span></li>
              <li><span className="name">Romana Black Sambuca</span><span className="price">$12</span></li>
              <li><span className="name">Benedictine</span><span className="price">$12</span></li>
              <li><span className="name">D.O.M. B&amp;B</span><span className="price">$12</span></li>
            </ul>

            <h3 className="subsection">Cordials</h3>
            <ul className="wine-list plain">
              <li><span className="name">Grand Marnier</span><span className="price">$12</span></li>
              <li><span className="name">Chambord</span><span className="price">$12</span></li>
              <li><span className="name">Pimm’s</span><span className="price">$11</span></li>
              <li><span className="name">St. Germain</span><span className="price">$12</span></li>
              <li><span className="name">Frangelico</span><span className="price">$11</span></li>
              <li><span className="name">Bendt Bourbon Cream</span><span className="price">$10</span></li>
              <li><span className="name">The King’s Ginger Liqueur</span><span className="price">$12</span></li>
              <li><span className="name">Cointreau</span><span className="price">$12</span></li>
              <li><span className="name">Fleur Charmante</span><span className="price">$12</span></li>
              <li><span className="name">Lazzaroni Amaretto</span><span className="price">$11</span></li>
              <li><span className="name">Mozart Chocolate Cream</span><span className="price">$11</span></li>
              <li><span className="name">Mozart White Chocolate Cream</span><span className="price">$11</span></li>
              <li><span className="name">St. George Spiced Pear</span><span className="price">$12</span></li>
              <li><span className="name">Tempus Fugit Crème De Cacao</span><span className="price">$12</span></li>
              <li><span className="name">Tempus Fugit Crème De Menthe</span><span className="price">$12</span></li>
              <li><span className="name">Italicus</span><span className="price">$12</span></li>
              <li><span className="name">Borghetti Espresso Liqueur</span><span className="price">$11</span></li>
            </ul>
          </div>
          <div className="folio">XIV</div>
        </article>

        <article className="page page-piano" aria-label="Page XV" data-pdf-page="15">
          <div className="divider-word" aria-label="Live Piano">
            <span className="lead">LIVE</span>
            <span className="drop">P</span>
            <span className="tail">iano</span>
          </div>
          <div className="pianist">
            <span className="day">Sunday–Monday</span>
            <span className="name">Alexis Lugo</span>
          </div>
          <div className="pianist">
            <span className="day">Tue–Thu / Saturdays</span>
            <span className="name">Lewis Henderson</span>
          </div>
          <div className="pianist">
            <span className="day">Fridays</span>
            <span className="name">Robert Brown</span>
          </div>
          <div className="art">
            <img src="/assets/grand_piano.png" alt="" />
          </div>
          <div className="closer">7 Nights a Week</div>
        </article>
      </section>

      {/* Spread 8: Page XVI (single left, blank back) */}
      <section className="spread single" aria-label="Spread 9 — Back">
        <article className="page page-back" aria-label="Page XVI" data-pdf-page="16"></article>
      </section>
    </>
  );
}
