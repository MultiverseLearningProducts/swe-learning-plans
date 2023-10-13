# Data Science

Data science is a huge subject, with lots of subdisciplines within it, and
ultimately underpinned by mathematical foundations. Whilst it isn't possible to
learn data science in a few sessions of study, it is possible to make a
purposeful start to your lifelong learning and pick up some really useful skills
along the way.

There are lots of places to learn data science online, but we've chosen to
recommend Codecademy's courses because they are freely available, and allow you
to practise your skills in the browser without fussing around getting things
installed.

## Basics of python for data science

The two big languages used in data science are Python and R. Whilst R was
created specifically for data science, Python is a multipurpose language and
will be a useful language to know for all sorts of reasons. We're recommending
Python, but do feel free to check out R if you're curious.

To work with data, Python has the mighty `Pandas` library, so almost all of your
work will have

```py
import pandas as pd
```

at the top. You'll often be using a Jupyter notebook, which is an environment
where code and its outputs can be sequenced into a readable document.

### Exploring data

[Exploring data with python](https://www.codecademy.com/courses/getting-started-with-python-for-data-science/lessons/exploring-data-with-python-dspython)
will give you the absolute basics of working with Pandas to read and display
data. You'll pick up some key Python concepts such as lists, dictionaries and
methods, as well as some Pandas specifc techniques like summarizing data. This
is our starting point.

### Sorting and filtering

[Sorting and filtering rows](https://www.codecademy.com/courses/getting-started-with-python-for-data-science/lessons/sorting-and-filtering-rows)
will teach you more about manipulating data frames with Pandas. These are
concepts you'll be familiar with from using spreadsheets, so it's comforting to
know Pandas can give you the same functionality (and a lot more!).

### Cleaning and transforming columns

Data from the real world is usually a bit of a mess. Missing values,
inconsistent format, and worse. _Cleaning_ data refers to the practice of
getting it all into an acceptable format before we analyse the data. Pandas
makes the practice of iterating through the data to clean it up much easier by
exposing a convenient API, so let's learn about it in
[cleaning and transoforming columns](https://www.codecademy.com/courses/getting-started-with-python-for-data-science/lessons/cleaning-and-transforming-columns).

## Data visualisation

Another fundamentally important library in Python is the `matplotlib` library,
created by John D. Hunter (1968-2012). It allows us to make publication quality
plots from our data, and it interacts well with Pandas. Let's learn how to
create basic visualisations with Matplotlib.

### Make a line chart

Learning to
[make a line chart](https://www.codecademy.com/courses/intro-to-data-visualization-with-python/lessons/make-a-line-chart)
will expose us to the main themes with regard to creating and styling plots.

### Other charts

There are plenty of
[other charts](https://www.codecademy.com/courses/intro-to-data-visualization-with-python/lessons/make-the-other-charts)
we can create with Matplotlib. Let's take a quick tour and learn how we can
illustrate our data sets with various graphs.

## Explore your own data

### Installing Jupyter locally

If you have Python on your machine set up with `pip` for installing packages,
you can run the following command in a terminal:

```bash
pip install notebook
```

With that being done, you should be able to do

```bash
jupyter notebook
```

in the terminal to open Jupyter. Open the url in a browser and you should see a
file explorer. Open the folder where you'd like to create your first notebook,
right-click and choose to create a notebook.

If you place a file called `data.csv` in the same folder as the notebook you
created, you will be able to load it into the notebook by doing something like

```py
import pandas as pd
df = pd.read_csv('./data.csv')
df.head()
```

### Using Jupyter on Kaggle

If you aren't able to get Jupyter installed locally, you can create an account
on [Kaggle](https://www.kaggle.com/). Once you're signed up, click _Create_ in
the top left and choose to make a new notebook.

On the right hand side, you can choose to load some data into your project.
Click _Add Data_ and then click _CSV_ - just some data that looks interesting to
you and click the plus symbol to add it. You will need to expand the folder to
find the `.csv` file inside. Copy the file path to access the data.

For example,

```py
import pandas as pd
df = pd.read_csv('/kaggle/input/api-clean-top-1000-youtubers-statistics/Clean_Top_1000_Youtube_df - youtubers_df.csv')
df.head()
```

Running this code displays the top 5 Youtubers.

### Explore your data

Once you have Jupyter working either locally or on Kaggle, go ahead and explore
some data.

There are some great files to explore on the
[awesome public data](https://github.com/awesomedata/awesome-public-datasets)
repo on Github. Likewise, you can download interesting CSV files directly from
Kaggle if you want to use them locally.

If you'd like some inspiration, make sure to check out
[Project 538](https://projects.fivethirtyeight.com/).

Try and produce some intersting summaries, sorts, and visualisations.
