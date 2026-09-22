window.IFC = window.IFC || {};
window.IFC[5] = {
  n: 5,
  section: "Investment Funds in Canada · Section 2 · Chapter 5",
  shortTitle: "Behavioural Finance",
  title: "Behavioural Finance",
  lede: "The shortest chapter in Section 2 and one of the easiest to score on — if you learn the eight biases by <em>category</em> rather than by definition. Almost every question here turns on one axis: is this bias cognitive or emotional, and therefore do you moderate it or adapt to it?",
  footer: "Distilled from <em>Investment Funds in Canada</em>, Section 2, Chapter 5 (CSI, 2024). Study aid only — not a substitute for the official text.",

  method: {
    title: "How to beat Chapter 5",
    sub: "One axis carries the whole chapter",
    steps: [
      "<b>Learn the cognitive/emotional split before you learn a single definition.</b> Four cognitive biases — overconfidence, representativeness, hindsight, availability. Four emotional — endowment, loss aversion, regret aversion, status quo. Every other fact in this chapter hangs off that split, including the allocation advice. Get the eight sorted into two columns and you have most of the chapter.",
      "<b>Know WHY the split matters, not just what it is.</b> Cognitive biases come from <b>faulty reasoning</b>, so <b>better information and advice can correct them</b> — you <b>moderate</b>. Emotional biases come from <b>impulse or intuition</b>, so they are <b>difficult to correct</b> — you <b>adapt</b>. That causal chain is the single most testable idea in the chapter.",
      "<b>Memorise the two best-practical-allocation principles verbatim.</b> &ldquo;Moderate biases in less-wealthy clients; adapt to biases in wealthier ones&rdquo; and &ldquo;moderate cognitive biases; adapt to emotional ones.&rdquo; Then work the four quadrants until you can produce any cell on demand — the low-wealth/emotional and high-wealth/cognitive cells are both <b>&ldquo;moderate and adapt&rdquo;</b>, which is exactly where questions are set.",
      "<b>Drill the pairs that sound alike.</b> Regret aversion and loss aversion both involve hanging on to losers, but for different reasons. Endowment and status quo both involve not selling, but for different reasons. The exam separates them; so should you.",
      "<b>Learn the three hard numbers.</b> Loss aversion is <b>twice</b> as powerful a motivator (so a loss-averse person demands a <b>two-dollar gain per one dollar risked</b>). Falling airplane parts are <b>thirty times</b> more likely than shark fatalities. Men are <b>one-third</b> more risk tolerant than women. Numbers make clean questions.",
      "<b>Do not skip the gender section.</b> It is short, it has a named study with a date, and it has a four-by-four table. That is unusually question-shaped for two pages of text."
    ],
    flag: {
      label: "Where the marks actually are",
      text: "In rough order of exam weight: <b>classifying a named bias as cognitive or emotional</b>, <b>the moderate/adapt rule and its reasoning</b>, <b>the two best-practical-allocation principles</b>, <b>identifying a bias from a described client behaviour</b>, and <b>the gender table</b>. The loss-aversion diagnostic test is worth knowing but appears once."
    }
  },

  objectives: [
    {
      tag: "Objective 1",
      title: "What behavioural finance is",
      blocks: [
        { points: [
          "<b>Behavioural finance</b> is commonly defined as <b>the application of psychology to understand human behaviour in finance or investing</b>. It is a field that <b>combines psychology and economics</b> to explain why and how investors act, and how that behaviour affects financial markets.",
          "The theory contends that <b>as human beings, investors are not necessarily rational or logical creatures</b>. They are subject to <b>personal beliefs and biases</b> that may lead to <b>irrational or emotional choices and decisions</b>.",
          "Over the past <b>twenty-five years</b>, human psychologists have made significant contributions to understanding how investors behave. Behavioural finance <b>challenges much of what economists and investment theorists — who study what is sometimes called traditional or standard finance — have to say</b> about how individuals make investment decisions.",
          "<b>Financial decision making is not always entirely rational.</b> Personality typing assigns a client to a specific type characterized by certain attitudes and behaviours — but <b>you cannot rely too much on the results of such a test</b>; it should only be used as a <b>general guide</b> to how the client might make a decision or react in a certain situation."
        ]},
        { flag: {
          label: "The named market anomaly",
          text: "The <b>January Effect</b> — researchers have uncovered that <b>stocks in general, and small stocks in particular, move abnormally higher during the month of January</b>. It is cited as evidence that <b>human behaviour influences securities prices and markets</b>, contradicting the assumption that markets are efficient."
        }},
        { table: {
          caption: "Standard finance vs. behavioural finance",
          head: ["Standard (traditional) finance assumes investors are…", "Behavioural finance suggests investors…"],
          rows: [
            ["<b>Risk averse</b>", "<b>Can be risk averse OR risk seeking, depending on the situation</b>"],
            ["<b>Rational in their decision-making abilities</b>", "<b>Can act irrationally, thus creating market opportunities</b>"],
            ["Characterized by rules about how investors <b>SHOULD</b> behave", "Identifies with and learns from how investors <b>ACTUALLY</b> behave"],
            ["Grounds its assumptions in <b>IDEALIZED</b> financial behaviour", "Is based on <b>OBSERVED</b> financial behaviour"]
          ]
        }},
        { points: [
          "A representative who understands how investor psychology affects decisions — and consequently investment outcomes — gains insights that <b>can only benefit the advisory relationship</b>.",
          "<b>A key result of a behavioural finance–enhanced relationship is a portfolio that the client can live with during up markets and down markets.</b> A client who understands his or her own investing behaviour will develop a <b>stronger relationship</b> with the representative."
        ]}
      ]
    },
    {
      tag: "Objective 2",
      title: "Cognitive biases vs. emotional biases",
      blocks: [
        { points: [
          "<b>Behavioural biases</b> are defined as <b>systematic errors in financial judgment or imperfections in the perception of economic reality</b>.",
          "Some refer to biases as <b>simple, efficient rules of thumb</b>; others call them <b>beliefs, judgments or preferences</b>. Researchers classify them along <b>cognitive</b> (relating to conscious intellectual activity such as thinking, reasoning and remembering) or <b>emotional</b> (relating to emotional responses to stimulus) lines.",
          "Biases fall into <b>two broad categories — cognitive and emotional — with both yielding irrational judgements</b>."
        ]},
        { table: {
          caption: "The central distinction — and the reason it matters",
          head: ["", "Cognitive bias", "Emotional bias"],
          rows: [
            ["<b>Definition</b>", "Basic <b>statistical, information processing or memory errors</b> that are <b>common to all human beings</b>. Can be thought of as <b>&ldquo;blind spots&rdquo; or distortions in the human mind</b>.", "<b>A mental state that arises SPONTANEOUSLY rather than through conscious effort.</b> Emotions are <b>physical expressions, often involuntary</b>, related to feelings, perceptions or beliefs."],
            ["<b>Origin</b>", "<b>Not</b> from emotional or intellectual predisposition, but from <b>subconscious mental procedures for processing information</b>", "From <b>impulse or intuition</b> rather than conscious calculation"],
            ["<b>Correctable?</b>", "<b>YES</b> — because they stem from <b>faulty reasoning</b>, <b>better information and advice can often correct them</b>", "<b>Hard</b> — individuals feeling emotions may <b>wish to control them but often cannot</b>, so these biases are <b>difficult to correct</b>"],
            ["<b>Therefore you…</b>", "<b>MODERATE</b>", "<b>ADAPT</b>"]
          ]
        }},
        { flag: {
          label: "Anchoring — named as one of the most common cognitive biases",
          text: "Clients get <b>anchored to the price of a stock or the level of the market</b> and <b>hold on to that price before being willing or able to make an investment decision</b>. Investors face large volumes of information and opt for <b>simplified information processing</b> — even using a research service like Morningstar, the flow is so immense they rely on shortcuts such as <b>&ldquo;best 12-month return&rdquo;</b> to make a fund choice."
        }},
        { table: {
          caption: "The four COGNITIVE biases",
          head: ["Bias", "Definition and example"],
          rows: [
            ["<b>Overconfidence</b>", "<b>Unwarranted faith in one's intuitive reasoning, judgements and cognitive abilities.</b> People <b>overestimate both their predictive abilities and the precision of the information</b> they have been given. Sometimes they realize events they thought certain did not occur, but <b>they don't learn from these mistakes</b>. In investing, people think they are smarter and have better information than they actually do — e.g. acting on a tip from a contact or something read on the internet, <b>based on a perceived knowledge advantage</b>."],
            ["<b>Representativeness</b>", "People develop an <b>internal system for classifying objects and thoughts</b>. Faced with new circumstances inconsistent with existing classifications, they rely on a <b>&ldquo;best fit&rdquo; process</b>. Sometimes new stimuli are <b>representative of elements already classified while in reality there are differences</b> — the <b>classification reflex is wrong</b>, producing an incorrect understanding that <b>persists and biases future interactions</b>. In investing: classifying what is really a <b>poor</b> investment opportunity as a <b>good</b> one based on the few elements that are representative of a good one."],
            ["<b>Hindsight bias</b>", "The belief that <b>the outcome of an event was predictable, even if it was not</b>. The actual outcome is clear in the person's mind while the outcomes that could have occurred but did not are fuzzy — so people <b>overestimate the accuracy of their own predictions</b>. A stock goes up and the investor feels he <b>&ldquo;knew it all along.&rdquo;</b> It may <b>prevent an investor from reviewing and learning from past mistakes</b>, leading to a tendency to <b>make the same mistakes again</b>."],
            ["<b>Availability bias</b>", "Allows people to <b>estimate the probability of an outcome based on how prevalent or familiar that outcome appears in their lives</b>. <b>Easily recalled possibilities are perceived as more likely</b> than outcomes that are harder to imagine. Classic example: most people guess <b>shark attacks</b> cause fatalities more frequently than injuries from <b>falling airplane parts</b> — but the latter is <b>thirty times more likely</b>. Sharks invoke greater fear and receive disproportionate media attention. <b>Mutual fund advertising is a good example</b> — investors who see a company's ads frequently may believe it is a good fund company, when a company that does no advertising may be better."]
          ]
        }},
        { table: {
          caption: "The four EMOTIONAL biases",
          head: ["Bias", "Definition and example"],
          rows: [
            ["<b>Endowment</b>", "People place <b>more value on an asset they hold property rights to than on an asset they do not</b>. This is <b>inconsistent with standard economic theory</b>, which says willingness to pay for a good should equal willingness to sell it. Psychologists find the <b>minimum selling prices people state tend to exceed the maximum purchase prices they are willing to pay for the same good</b>. Investors <b>continue to hold securities they own rather than disposing of them in favour of better opportunities</b>."],
            ["<b>Loss aversion</b>", "People feel a <b>stronger impulse to avoid losses than to acquire gains</b>. The possibility of a loss is, on average, <b>twice as powerful a motivator</b> as the possibility of a gain of equal magnitude — a loss-averse person might demand <b>at minimum a two-dollar gain for every one dollar placed at risk</b>. <b>Risks that don't &ldquo;pay double&rdquo; are unacceptable.</b> It can prevent people from <b>unloading unprofitable investments even when there is little to no prospect of a turnaround</b>. Industry veterans coined the diagnosis <b>&ldquo;get-even-itis&rdquo;</b> for waiting too long for a rebound."],
            ["<b>Regret aversion</b>", "People <b>avoid making decisions because they fear that, in hindsight, whatever they decide will turn out to be a bad decision</b>. Observed when investors <b>hold losing positions too long to avoid admitting errors and realizing losses</b>. When experiencing negative outcomes they <b>feel instinctively driven to sell — not to press on and snap up potentially undervalued stocks</b>. But <b>periods of depressed prices often present the greatest buying opportunities</b>, so sufferers <b>hesitate most at the moments that actually may merit aggressive behaviour</b>."],
            ["<b>Status quo</b>", "Predisposes people, when <b>faced with a wide variety of options</b>, to <b>choose to keep things the same</b>. The scientific principle of <b>inertia</b> — a body at rest remains at rest unless acted upon by an outside force — is a similar concept. It can cause investors to <b>hold securities with which they feel familiar or emotionally fond</b>. This can compromise financial goals, because <b>a subjective comfort level with a security may not justify holding onto it despite poor performance</b>."]
          ]
        }},
        { flag: {
          label: "The loss-aversion diagnostic test — and its scoring",
          text: "<b>Question 1:</b> choose between <b>(a)</b> an assured gain of <b>$475</b>, or <b>(b)</b> a <b>25% chance of gaining $2,000 and a 75% chance of gaining nothing</b>. <b>Question 2:</b> choose between <b>(a)</b> an assured loss of <b>$750</b>, or <b>(b)</b> a <b>75% chance of losing $1,000 and a 25% chance of losing nothing</b>.<br><br><b>Scoring:</b> On Question 1 the rational response is <b>(b)</b>, but loss-averse investors are likely to opt for <b>the assurance of a gain in (a)</b>. On Question 2 the rational response is <b>(a)</b>, but loss-averse investors are more likely to select <b>(b)</b>."
        }},
        { table: {
          caption: "Figure 5.1 — typical biases men and women are susceptible to",
          head: ["Men are susceptible to:", "Women are susceptible to:"],
          rows: [
            ["<b>Overconfidence</b> bias (Cognitive)", "<b>Endowment</b> bias (Emotional)"],
            ["<b>Loss aversion</b> bias (Emotional)", "<b>Status quo</b> bias (Emotional)"],
            ["<b>Availability</b> bias (Cognitive)", "<b>Representativeness</b> bias (Cognitive)"],
            ["<b>Hindsight</b> bias (Cognitive)", "<b>Regret aversion</b> bias (Emotional)"]
          ]
        }},
        { points: [
          "<b>Generally, men are more susceptible to cognitive biases and women are more susceptible to emotional biases.</b>",
          "Gender differences noted in the text: <b>women believe that random sequences with no automatic correlation display positive correlation in reality</b> — the basketball example, where coaches and players believe a player who has made several shots in a row is more likely than usual to make the next one; that is, <b>they see patterns where perhaps none exist</b>. <b>Men are more overconfident and optimistic than women.</b> <b>Women are more likely to buy and hold.</b> <b>Men are one-third more risk tolerant than women.</b>",
          "Some studies concluded women are <b>less optimistic or more skeptical</b> than men, and <b>generally less risk tolerant</b>.",
          "In <b>November 2005</b>, <b>Alexandra Niessen and Stephan Ruenzi</b> of the <b>University of Cologne</b> completed a study entitled <b>&ldquo;Gender and Mutual Funds.&rdquo;</b> They examined all single-managed U.S. equity mutual funds from <b>1994 to 2003</b>. <b>10% of fund managers were women.</b> They found female fund managers <b>take less risk, follow less extreme investment styles (more consistent styles), are less overconfident and trade less</b>.",
          "Practical implication: <b>representatives should listen to both the male and the female partner and attempt to arrive at a risk assessment that reflects a balance between them.</b>",
          "<b>People are neither perfectly rational nor perfectly irrational, but possess diverse combinations of rational and irrational characteristics.</b>"
        ]}
      ]
    },
    {
      tag: "Objective 3",
      title: "Best practical allocation — moderate or adapt?",
      blocks: [
        { points: [
          "Many representatives designing an asset allocation typically <b>first administer a risk profile questionnaire, then discuss financial goals and constraints, and then recommend an allocation</b>. <b>Less-than-optimal outcomes are often a result of this process because the client's psychological biases may not be accounted for.</b>",
          "Instead, investors may be better served by <b>adjusting risk and return levels depending upon their behavioural tendencies</b>. This is called the client's <b>best practical allocation</b>.",
          "<b>A best practical allocation may slightly underperform over the long term and have lower risk, but it is an allocation the client can comfortably adhere to over the long run.</b>",
          "Many clients, in response to a market downturn, <b>want to sell in a panic</b>. Conversely, a client's best practical allocation might <b>contradict their natural psychological tendencies</b> — these clients may be well served to <b>accept risks in excess of their individual comfort levels</b> in order to maximize expected returns, because, for example, <b>they risk outliving their assets</b>.",
          "The framework is adapted from an article by <b>Michael Pompian and John Longo</b> originally published in the <b>March 2005 Journal of Financial Planning</b>.",
          "The principles are <b>not intended as prescriptive absolutes</b> — they should be used alongside other data on the client's risk profile, financial goals and asset class preferences. They are <b>general enough to fit almost any client situation</b>."
        ]},
        { flag: {
          label: "The two principles — memorise these verbatim",
          text: "<b>1. Moderate biases in less-wealthy clients; adapt to biases in wealthier ones.</b><br><b>2. Moderate cognitive biases; adapt to emotional ones.</b>"
        }},
        { table: {
          caption: "Why each principle holds",
          head: ["Principle", "The reasoning"],
          rows: [
            ["<b>Moderate in less-wealthy; adapt in wealthier</b>", "<b>A client outliving his assets constitutes a far graver investment failure than his inability to accumulate the greatest possible wealth.</b> If an allocation performs poorly because it adapts too willingly to a client's biases, a <b>less-wealthy client's standard of living could be seriously jeopardized</b> — whereas the most financially secure clients would likely continue to reside in the <b>99.9th socioeconomic percentile</b>. So: <b>if a biased allocation could put a client's way of life at risk, moderating the bias is the best response</b>. If only a highly unlikely event such as a market crash could threaten day-to-day security, the sub-optimal impact of bias becomes a lesser consideration — <b>adapting is then appropriate</b>."],
            ["<b>Moderate cognitive; adapt to emotional</b>", "<b>Because cognitive biases stem from faulty reasoning, better information and advice can often correct them.</b> <b>Because emotional biases originate from impulse or intuition rather than conscious calculation, they are difficult to rectify.</b>"]
          ]
        }},
        { table: {
          caption: "Figure 5.2 — the four quadrants of best practical allocation",
          head: ["", "Cognitive biases (Moderate)", "Emotional biases (Adapt)"],
          rows: [
            ["<b>High level of wealth</b><br>(Adapt)", "<b>Moderate &amp; Adapt</b>", "<b>Adapt</b>"],
            ["<b>Low level of wealth</b><br>(Moderate)", "<b>Moderate</b>", "<b>Moderate &amp; Adapt</b>"]
          ]
        }},
        { flag: {
          label: "The consequence they will test",
          text: "Heeding both principles simultaneously sometimes yields a <b>blended recommendation</b> — a <b>less-wealthy client with strong emotional biases should be both adapted to and moderated</b>. And because wealth level enters the decision, <b>two clients exhibiting the same biases should sometimes be advised differently</b>."
        }}
      ]
    }
  ],

  numbers: [
    ["2×", "Loss aversion — a loss is, on average, <b>twice as powerful a motivator</b> as an equal gain"],
    ["$2 : $1", "A loss-averse person may demand a <b>two-dollar gain for every one dollar</b> placed at risk"],
    ["30×", "Falling airplane parts are <b>thirty times</b> more likely to cause injury than shark attacks are to cause fatalities"],
    ["⅓", "Men are <b>one-third more risk tolerant</b> than women"],
    ["4 + 4", "Four cognitive biases and four emotional biases"],
    ["2", "Principles for constructing a best practical allocation"],
    ["25 years", "How long psychologists have been contributing significantly to understanding investor behaviour"],
    ["Nov 2005", "<b>Niessen and Ruenzi</b>, University of Cologne — &ldquo;Gender and Mutual Funds&rdquo;"],
    ["1994–2003", "Period covered by that study of single-managed U.S. equity mutual funds"],
    ["10%", "Share of fund managers in the study who were <b>women</b>"],
    ["Mar 2005", "<b>Pompian and Longo</b>, <em>Journal of Financial Planning</em> — source of the best practical allocation framework"],
    ["99.9th", "Socioeconomic percentile the most financially secure clients would likely continue to occupy"],
    ["January", "The month in which stocks — and <b>small stocks in particular</b> — move abnormally higher"],
    ["$475 / $2,000", "Question 1 of the loss-aversion diagnostic: assured gain vs. a <b>25%</b> chance"],
    ["$750 / $1,000", "Question 2: assured loss vs. a <b>75%</b> chance of losing"],
    ["5%", "Share of his portfolio the case-study client is given to &ldquo;play with&rdquo; in a self-directed account (the other <b>95%</b> stays in a proper portfolio)"]
  ],

  traps: [
    ["Cognitive bias", "<b>Statistical, information processing or memory errors.</b> From <b>subconscious mental procedures</b> — not emotion. <b>Correctable with better information.</b>", "Emotional bias", "<b>A mental state arising SPONTANEOUSLY</b>, not through conscious effort. From <b>impulse or intuition</b>. <b>Difficult to correct.</b>"],
    ["Moderate", "What you do with <b>COGNITIVE</b> biases and with <b>LESS-WEALTHY</b> clients.", "Adapt", "What you do with <b>EMOTIONAL</b> biases and with <b>WEALTHIER</b> clients."],
    ["Loss aversion (Emotional)", "Feels the pain of loss <b>twice as strongly</b> as an equal gain. Won't unload losers — <b>&ldquo;get-even-itis.&rdquo;</b> Demands a 2:1 payoff.", "Regret aversion (Emotional)", "<b>Avoids deciding at all</b>, fearing the decision will look bad in hindsight. Hesitates most <b>when aggression is warranted</b>."],
    ["Endowment (Emotional)", "Values an asset <b>more because they own it</b>. Selling price demanded <b>exceeds</b> the price they'd pay for the same thing.", "Status quo (Emotional)", "<b>Inertia.</b> Faced with many options, keeps things the same. Holds what feels <b>familiar or emotionally fond</b>."],
    ["Overconfidence (Cognitive)", "<b>Unwarranted faith</b> in one's own reasoning. Overestimates <b>predictive ability</b> and the <b>precision of information</b>.", "Hindsight (Cognitive)", "<b>&ldquo;Knew it all along.&rdquo;</b> Believes the outcome was predictable when it wasn't. Blocks <b>learning from mistakes</b>."],
    ["Representativeness (Cognitive)", "<b>Wrong classification reflex.</b> Forces a new thing into a &ldquo;best fit&rdquo; category it doesn't belong in.", "Availability (Cognitive)", "<b>Easily recalled = assumed more likely.</b> Sharks vs. airplane parts; mutual fund <b>advertising</b>."],
    ["Standard finance", "Rules about how investors <b>SHOULD</b> behave. <b>Idealized.</b> Assumes risk aversion and rationality.", "Behavioural finance", "Learns from how investors <b>ACTUALLY</b> behave. <b>Observed.</b> Risk averse <em>or</em> risk seeking; can act irrationally."],
    ["Men", "More susceptible to <b>COGNITIVE</b> biases. More overconfident and optimistic. <b>One-third more risk tolerant.</b>", "Women", "More susceptible to <b>EMOTIONAL</b> biases. More likely to <b>buy and hold</b>. Less optimistic, more skeptical."],
    ["Low wealth + cognitive", "<b>Moderate.</b>", "Low wealth + emotional", "<b>Moderate &amp; Adapt</b> — the blended case."],
    ["High wealth + emotional", "<b>Adapt.</b>", "High wealth + cognitive", "<b>Moderate &amp; Adapt</b> — the other blended case."]
  ],

  cards: [
    ["Define behavioural finance.", "The <b>application of psychology to understand human behaviour in finance or investing</b> — a field combining <b>psychology and economics</b> to explain why and how investors act and how that behaviour affects financial markets."],
    ["What does behavioural finance theory contend about investors?", "That as human beings, <b>investors are not necessarily rational or logical creatures</b>. They are subject to <b>personal beliefs and biases</b> that may lead to <b>irrational or emotional choices and decisions</b>."],
    ["What is the January Effect and why does it matter?", "Researchers uncovered that <b>stocks in general, and small stocks in particular, move abnormally higher during the month of January</b>. It is an <b>abnormal market behaviour</b> demonstrating that <b>human behaviour influences securities prices and markets</b> — contradicting the assumption that markets are efficient."],
    ["What do standard theories of finance assume about investors?", "That investors are <b>risk averse</b> and <b>rational in their decision-making abilities</b>."],
    ["What do behavioural finance theories suggest instead?", "That investors <b>can be risk averse OR risk seeking, depending on the situation</b>, and <b>can act irrationally, thus creating market opportunities</b>."],
    ["Contrast standard and behavioural finance in one sentence each.", "<b>Standard finance</b> is characterized by rules about how investors <b>should</b> behave and grounds its assumptions in <b>idealized</b> financial behaviour. <b>Behavioural finance</b> identifies with and learns from how investors <b>actually</b> behave and is based on <b>observed</b> financial behaviour."],
    ["What is the key result of a behavioural finance–enhanced relationship?", "<b>A portfolio that the client can live with during up markets and down markets.</b> A client who understands his or her own investing behaviour — learned through working with the representative — will develop a <b>stronger relationship</b> with that representative."],
    ["Define behavioural biases.", "<b>Systematic errors in financial judgment or imperfections in the perception of economic reality.</b> They fall into two broad categories — <b>cognitive and emotional</b> — with both yielding irrational judgements."],
    ["Define a cognitive bias.", "<b>Basic statistical, information processing or memory errors that are common to all human beings</b> — think of them as <b>&ldquo;blind spots&rdquo; or distortions in the human mind</b>. They do <b>not</b> result from emotional or intellectual predisposition, but from <b>subconscious mental procedures for processing information</b>."],
    ["Define an emotional bias.", "<b>A mental state that arises spontaneously, rather than through conscious effort.</b> Emotions are <b>physical expressions, often involuntary</b>, related to feelings, perceptions or beliefs about elements, objects or relations, in reality or in the imagination."],
    ["Why are cognitive biases correctable but emotional biases not?", "Because <b>cognitive biases stem from faulty reasoning</b>, so <b>better information and advice can often correct them</b>. <b>Emotional biases originate from impulse or intuition rather than conscious calculations</b>, so they are <b>difficult to correct</b> — individuals may wish to control their emotions but often cannot."],
    ["Name the four cognitive biases.", "<b>Overconfidence</b>, <b>representativeness</b>, <b>hindsight bias</b>, and <b>availability bias</b>. (<b>Anchoring</b> is also named in the text as one of the most common cognitive biases.)"],
    ["Name the four emotional biases.", "<b>Endowment</b>, <b>loss aversion</b>, <b>regret aversion</b>, and <b>status quo</b>."],
    ["What is anchoring bias?", "One of the most common cognitive biases — clients get <b>anchored to the price of a stock or the level of the market</b> and <b>hold on to that price before being willing or able to make an investment decision</b>."],
    ["Define overconfidence.", "<b>Unwarranted faith in one's intuitive reasoning, judgements and cognitive abilities.</b> People <b>overestimate both their predictive abilities and the precision of the information</b> they have been given. In investing, they think they are <b>smarter and better informed than they actually are</b> — e.g. acting on a tip from a contact or something read online based on a <b>perceived knowledge advantage</b>."],
    ["Define representativeness bias.", "People classify objects and thoughts using an internal system, and when confronted with new circumstances they use a <b>&ldquo;best fit&rdquo; process</b>. Sometimes new stimuli <b>appear representative of already-classified elements when in reality there are differences</b> — the <b>classification reflex is wrong</b>, producing an incorrect understanding that <b>persists and biases future interactions</b>. In investing, a <b>poor</b> opportunity gets classified as a <b>good</b> one based on the few elements that resemble a good one."],
    ["Define hindsight bias and its practical danger.", "The belief that <b>the outcome of an event was predictable, even if it was not</b>. The actual outcome is clear while the outcomes that didn't happen are fuzzy, so people <b>overestimate the accuracy of their own predictions</b> — &ldquo;I knew it all along.&rdquo; The danger: it may <b>prevent an investor from reviewing and learning from past mistakes</b>, leading to a tendency to <b>repeat them</b>."],
    ["Define availability bias and give both examples.", "Estimating the probability of an outcome <b>based on how prevalent or familiar it appears in one's life</b> — <b>easily recalled possibilities seem more likely</b>. <b>Example 1:</b> people guess shark attacks cause fatalities more often than injuries from <b>falling airplane parts</b>, but the latter is <b>thirty times more likely</b>. <b>Example 2:</b> <b>mutual fund advertising</b> — investors who see a company's ads often may believe it is a good fund company, when a company that does no advertising may be better."],
    ["Define endowment bias and why it contradicts economic theory.", "People <b>place more value on an asset they hold property rights to than on one they do not</b>. Standard economic theory says <b>willingness to pay for a good should equal willingness to sell it</b> — but psychologists find <b>minimum selling prices tend to exceed the maximum purchase prices people will pay for the same good</b>. Investors therefore <b>keep holding securities they own rather than switching to better opportunities</b>."],
    ["Define loss aversion, including its magnitude.", "People feel a <b>stronger impulse to avoid losses than to acquire gains</b>. A loss is on average <b>twice as powerful a motivator</b> as a gain of equal magnitude, so a loss-averse person might demand <b>at minimum a two-dollar gain for every one dollar placed at risk</b> — <b>risks that don't &ldquo;pay double&rdquo; are unacceptable</b>."],
    ["What is &ldquo;get-even-itis&rdquo;?", "The industry veterans' diagnosis for <b>loss aversion</b> — the condition whereby a person <b>waits too long for an investment to rebound following a loss</b>. Loss aversion can prevent people from <b>unloading unprofitable investments even when there is little to no prospect of a turnaround</b>."],
    ["Define regret aversion.", "People <b>avoid making decisions because they fear that, in hindsight, whatever they decide will result in a bad decision</b>. Observed when investors <b>hold losing positions too long to avoid admitting errors and realizing losses</b>."],
    ["What is the paradox of regret aversion in a downturn?", "When experiencing negative outcomes, sufferers <b>feel instinctively driven to sell — not to press on and snap up potentially undervalued stocks</b>. But <b>periods of depressed prices often present the greatest buying opportunities</b>. So people with regret aversion <b>hesitate most at the moments that actually may merit aggressive behaviour</b>."],
    ["Define status quo bias and the principle it resembles.", "An emotional bias that <b>predisposes people, when faced with a wide variety of options, to choose to keep things the same</b>. It resembles the scientific principle of <b>inertia</b> — a body at rest remains at rest unless acted on by an outside force. It causes investors to <b>hold securities they feel familiar with or emotionally fond of</b>, even when a <b>subjective comfort level does not justify holding on despite poor performance</b>."],
    ["Give the loss-aversion diagnostic test and its scoring.", "<b>Q1:</b> (a) an assured gain of <b>$475</b>, or (b) a <b>25%</b> chance of gaining <b>$2,000</b> and a 75% chance of nothing. <b>Q2:</b> (a) an assured loss of <b>$750</b>, or (b) a <b>75%</b> chance of losing <b>$1,000</b> and a 25% chance of nothing.<br><b>Scoring:</b> Q1 rational response is <b>(b)</b>, but loss-averse investors opt for the assurance of a gain in <b>(a)</b>. Q2 rational response is <b>(a)</b>, but loss-averse investors select <b>(b)</b>."],
    ["Which gender is more susceptible to which category of bias?", "<b>Men are more susceptible to cognitive biases; women are more susceptible to emotional biases.</b>"],
    ["List the four biases men are typically susceptible to.", "<b>Overconfidence</b> (Cognitive), <b>loss aversion</b> (Emotional), <b>availability</b> (Cognitive), and <b>hindsight</b> (Cognitive)."],
    ["List the four biases women are typically susceptible to.", "<b>Endowment</b> (Emotional), <b>status quo</b> (Emotional), <b>representativeness</b> (Cognitive), and <b>regret aversion</b> (Emotional)."],
    ["State the four gender differences the text lists.", "<ul><li><b>Women believe random sequences with no automatic correlation display positive correlation in reality</b> — seeing patterns where perhaps none exist (the basketball &ldquo;hot hand&rdquo; example)</li><li><b>Men are more overconfident and optimistic</b> than women</li><li><b>Women are more likely to buy and hold</b></li><li><b>Men are one-third more risk tolerant</b> than women</li></ul>"],
    ["Describe the Niessen and Ruenzi study and its findings.", "<b>November 2005</b>, <b>Alexandra Niessen and Stephan Ruenzi</b>, <b>University of Cologne</b>, &ldquo;Gender and Mutual Funds.&rdquo; They examined all single-managed U.S. equity mutual funds from <b>1994 to 2003</b>; <b>10% of fund managers were women</b>. Female managers <b>take less risk, follow less extreme (more consistent) investment styles, are less overconfident and trade less</b>."],
    ["What practical advice follows from the gender research?", "Representatives should <b>listen to both the male and the female partner and attempt to arrive at a risk assessment that reflects a balance between them</b>. Women who are less risk tolerant and trade less tend to <b>balance out men who tend to be aggressive</b> in these areas."],
    ["Define a client's best practical allocation.", "An allocation arrived at by <b>adjusting risk and return levels depending upon the client's behavioural tendencies</b>. It <b>may slightly underperform over the long term and have lower risk, but it is an allocation the client can comfortably adhere to over the long run</b>."],
    ["Why do conventional allocation processes produce less-than-optimal outcomes?", "Because representatives typically administer a risk profile questionnaire, discuss goals and constraints, then recommend an allocation — and in that process <b>the client's psychological biases may not be accounted for</b>."],
    ["State the two principles for constructing a best practical allocation.", "<b>1. Moderate biases in less-wealthy clients; adapt to biases in wealthier ones.</b><br><b>2. Moderate cognitive biases; adapt to emotional ones.</b><br>Adapted from Michael Pompian and John Longo, <em>Journal of Financial Planning</em>, March 2005."],
    ["Why moderate in less-wealthy clients and adapt in wealthier ones?", "Because <b>a client outliving his assets constitutes a far graver investment failure than his inability to accumulate the greatest possible wealth</b>. If an allocation adapts too willingly to biases and performs poorly, a <b>less-wealthy client's standard of living could be seriously jeopardized</b>, while the most secure clients would still reside in the <b>99.9th socioeconomic percentile</b>. <b>If a biased allocation could put a client's way of life at risk, moderating is the best response.</b>"],
    ["Fill in the four quadrants of Figure 5.2.", "<ul><li><b>High wealth + cognitive</b> → <b>Moderate &amp; Adapt</b></li><li><b>High wealth + emotional</b> → <b>Adapt</b></li><li><b>Low wealth + cognitive</b> → <b>Moderate</b></li><li><b>Low wealth + emotional</b> → <b>Moderate &amp; Adapt</b></li></ul>"],
    ["What blended case does the text give explicitly?", "A <b>less-wealthy client with strong emotional biases</b> should be <b>both adapted to and moderated</b>. Heeding the two principles simultaneously sometimes yields a blended recommendation."],
    ["Can two clients with identical biases be advised differently?", "<b>Yes.</b> Because wealth level enters the decision alongside bias type, the principles tell us that <b>two clients exhibiting the same biases should sometimes be advised differently</b>."],
    ["Are the two allocation principles absolute rules?", "<b>No.</b> They are <b>not intended as prescriptive absolutes</b> — they should be used along with other data on the client's risk profile, financial goals, asset class preferences and so on. They are <b>general enough to fit almost any client situation</b>."],
    ["How reliable is personality typing for understanding a client?", "You <b>cannot rely too much on the results of such a test</b>. It should only be used as a <b>general guide</b> to how the client might make a decision or react in a certain situation."],
    ["What is the overall verdict on investor rationality?", "<b>People are neither perfectly rational nor perfectly irrational, but possess diverse combinations of rational and irrational characteristics.</b> Most individuals can benefit from a representative's help in balancing and overcoming their biases, perceptions and irrational approaches to investing."]
  ],

  quiz: [
    ["Behavioural finance is commonly defined as:", ["The application of psychology to understand human behaviour in finance or investing", "The study of efficient market pricing", "A method of calculating risk-adjusted returns", "The regulation of investor conduct"], 0, "Behavioural finance is the application of psychology to understand human behaviour in finance or investing — a field combining psychology and economics."],
    ["Which of the following is a COGNITIVE bias?", ["Endowment", "Status quo", "Availability", "Regret aversion"], 2, "The four cognitive biases are overconfidence, representativeness, hindsight and availability. Endowment, status quo, loss aversion and regret aversion are emotional."],
    ["Which of the following is an EMOTIONAL bias?", ["Overconfidence", "Loss aversion", "Hindsight", "Representativeness"], 1, "Loss aversion is emotional, along with endowment, regret aversion and status quo. Overconfidence, hindsight and representativeness are cognitive."],
    ["Cognitive biases can often be corrected because they:", ["Arise spontaneously from emotion", "Only affect inexperienced investors", "Stem from faulty reasoning, so better information and advice help", "Are prohibited by NI 31-103"], 2, "Because cognitive biases stem from faulty reasoning, better information and advice can often correct them. Emotional biases originate from impulse or intuition and are difficult to rectify."],
    ["A client insists he 'knew all along' that a stock would rise, though the outcome was genuinely unpredictable. This is:", ["Overconfidence", "Representativeness", "Hindsight bias", "Availability bias"], 2, "Hindsight bias is the belief that an event's outcome was predictable even if it was not, causing people to overestimate the accuracy of their own predictions — and it may prevent them from learning from past mistakes."],
    ["A client refuses to sell a losing fund, saying he'll sell 'once it gets back to what I paid.' This best illustrates:", ["Loss aversion", "Representativeness bias", "Status quo bias", "Availability bias"], 0, "Loss aversion prevents people from unloading unprofitable investments even when there is little prospect of a turnaround. Industry veterans call this 'get-even-itis.'"],
    ["According to loss aversion research, a loss is on average how powerful a motivator compared with an equivalent gain?", ["Half as powerful", "Twice as powerful", "Equally powerful", "Ten times as powerful"], 1, "The possibility of a loss is, on average, twice as powerful a motivator as the possibility of a gain of equal magnitude — so a loss-averse person might demand a two-dollar gain for every one dollar placed at risk."],
    ["A client believes a fund company is excellent mainly because she sees its advertisements constantly. This is:", ["Endowment bias", "Availability bias", "Overconfidence", "Regret aversion"], 1, "Availability bias lets people estimate probability based on how prevalent or familiar an outcome appears. Mutual fund advertising is the text's own example — a company that does no advertising may be better."],
    ["A client demands a higher price to sell a security than she would ever pay to buy the identical security. This is:", ["Status quo bias", "Loss aversion", "Hindsight bias", "Endowment bias"], 3, "Endowment bias places more value on an asset one holds property rights to. Psychologists find that minimum selling prices stated tend to exceed maximum purchase prices for the same good — inconsistent with standard economic theory."],
    ["A client avoids rebalancing at all, fearing that any choice will look wrong later. This is:", ["Regret aversion", "Overconfidence", "Availability bias", "Endowment bias"], 0, "Regret aversion means avoiding decisions for fear that, in hindsight, whatever is decided will prove to be a bad decision. Sufferers hesitate most at moments that actually may merit aggressive behaviour."],
    ["Status quo bias most closely resembles which scientific principle?", ["Entropy", "Inertia", "Equilibrium", "Diminishing returns"], 1, "The scientific principle of inertia — a body at rest remains at rest unless acted upon by an outside force — is a similar concept to status quo bias."],
    ["The January Effect refers to the observation that:", ["Mutual fund fees reset each January", "RRSP contributions peak in January", "Trading volume collapses in January", "Stocks, and small stocks in particular, move abnormally higher in January"], 3, "The January Effect is an abnormal market behaviour where stocks in general, and small stocks in particular, move abnormally higher during January — evidence that human behaviour influences prices and markets."],
    ["Standard finance grounds its assumptions in ___ behaviour, whereas behavioural finance is based on ___ behaviour.", ["observed; idealized", "historical; forecast", "rational; regulated", "idealized; observed"], 3, "Standard finance grounds its assumptions in idealized financial behaviour; behavioural finance is based on observed financial behaviour."],
    ["A client's best practical allocation is best described as one that:", ["Maximizes expected return regardless of comfort", "Eliminates all behavioural bias from the portfolio", "May slightly underperform but the client can comfortably adhere to long term", "Matches the questionnaire score exactly"], 2, "A best practical allocation may slightly underperform over the long term and have lower risk, but it is an allocation the client can comfortably adhere to over the long run."],
    ["The two principles for constructing a best practical allocation are:", ["Moderate all biases; never adapt", "Moderate biases in less-wealthy clients and adapt in wealthier ones; moderate cognitive biases and adapt to emotional ones", "Moderate biases in wealthier clients; adapt in less-wealthy ones", "Adapt to cognitive biases; moderate emotional ones"], 1, "The two principles are: moderate biases in less-wealthy clients and adapt to biases in wealthier ones; and moderate cognitive biases and adapt to emotional ones."],
    ["A LESS-WEALTHY client with strong EMOTIONAL biases should be:", ["Both moderated and adapted to", "Adapted to only", "Moderated only", "Referred to another representative"], 0, "Heeding both principles simultaneously yields a blended recommendation: a less-wealthy client with strong emotional biases should be both adapted to and moderated."],
    ["A WEALTHY client with EMOTIONAL biases should be:", ["Moderated", "Neither", "Both moderated and adapted to", "Adapted to"], 3, "High wealth points to adapt and emotional bias points to adapt, so the quadrant is simply 'Adapt.'"],
    ["The rationale for moderating biases in less-wealthy clients is that:", ["Outliving one's assets is a graver failure than not maximizing wealth", "Wealthier clients are more rational", "Regulators require it", "Less-wealthy clients have fewer biases"], 0, "A client outliving his assets constitutes a far graver investment failure than his inability to accumulate the greatest possible wealth. If a biased allocation could put a client's way of life at risk, moderating is the best response."],
    ["Generally speaking, men and women differ in that:", ["Women are more susceptible to cognitive biases and men to emotional biases", "Men are more susceptible to cognitive biases and women to emotional biases", "Both are equally susceptible to all biases", "Neither group shows systematic differences"], 1, "Generally, men are more susceptible to cognitive biases and women are more susceptible to emotional biases."],
    ["According to the text, men are how much more risk tolerant than women?", ["One-third more risk tolerant", "Twice as risk tolerant", "Ten percent more risk tolerant", "Equally risk tolerant"], 0, "The text states that men are one-third more risk tolerant than women. It also notes men are more overconfident and optimistic, and women are more likely to buy and hold."],
    ["In the Niessen and Ruenzi study of U.S. equity mutual funds, female fund managers were found to:", ["Trade more and take more risk", "Manage half of all funds studied", "Outperform male managers by a wide margin", "Take less risk, follow more consistent styles, be less overconfident and trade less"], 3, "The November 2005 University of Cologne study examined single-managed U.S. equity funds from 1994 to 2003, where 10% of managers were women. Female managers take less risk, follow less extreme investment styles, are less overconfident and trade less."],
    ["On the loss-aversion diagnostic, the rational response to Question 1 is (b), but a loss-averse client will likely choose:", ["(b), the 25% chance of $2,000", "Neither option", "(a), the assured gain of $475", "Both options equally"], 2, "On Question 1 the rational response is (b), but loss-averse investors are likely to opt for the assurance of a gain in (a). On Question 2 the rational response is (a), but loss-averse investors are more likely to select (b)."]
  ]
};
