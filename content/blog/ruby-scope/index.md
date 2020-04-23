---
title: Ruby - Class, Instance and Local Variables
date: "2019-12-16T22:40:32.169Z"
description: Clarifying differences between variables in Ruby
---


For my first blog post, I decided to write about different types of variables.

A variable is when I have something in my ruby code that I want to call later in my code, I can set it to a variable name that I can call it by later in my code.

It is important to fully grasp the differences between the different forms of variables, when to use them, and essentially, how they operate.

First off, let’s create a class:
```rb
class Team
end
```

Great! Now our class needs to have an attribute to hold information, i.e. you can’t have a team without a name!! So let’s initiate our team with a name.
```rb
class Team
    def initialize(name)
        @name = name
    end

    def name 
        @name 
    end
end
```
(For practical purposes I added in a reader method, for more about the reader and writer methods, as well as an easier way of writing them, check this out

<!-- Article about Ruby -->

for now, all you need to know regarding variables is that they allow us to read or access our instances of Team class). Awesome!! Now we have a name!! Now, If you create a new instance of Team class, for example:
```rb
dodgers = Team.new(‘Dodgers’)
```
You have an instance of a Team called Dodgers!

As we saved this instance to a variable, you can call dodgers.name to see the name attribute of dodgers (also because we wrote in that reader method, if you remove def name, you will not be able to read the attributes.)

Now if this is your first time dealing with instance variables, you should be asking about the @symbol. Try running this code without those symbols (Warning: if you try to call dodgers.name without the @symbol you will probably hit an infinite loop, just use Ctrl+C to get out of it)

You’ll notice that you have created a new instance of Team but the name attribute is not attached. That is because the variable you have created is a LOCAL variable. A local variable is only accessible from within IT’S OWN SCOPE (in this case, its METHOD, ie. between the def and end block in Ruby).

What if we want to use this variable outside of an instance?

For that, we need to add the @symbol.

The @symbol tells our Ruby code that we want a more powerful variable, an instance variable, essentially, a variable that is not limited to just one method and can be accessed by other methods within the same class.

Wicked!! So we’re good, right? Not exactly. What if we want to access the actual class of Team??

What if we are creating a league of 50 teams? Do we have to memorize every team?

There should be a way to call Team.all and see a list of all the teams.

There is.

To do so we have to write a bit of code that, in short, persists or retains each created instance of a class (in our case Team) to the class as a whole, so that Team.all will show us every team. Let’s try the instance variable we used before:
```rb
class Team
 @all = []
    def initialize(name)
        @name = name
        @all << self
    end

    def name
        @name
    end

    def self.all
        @all
    end
end
```
Try running this code and you’ll get an error that says something like this:
```rb
undefined method `<<’ for nil:NilClass
(repl):5:in `initialize’
(repl):14:in `new’
(repl):14:in `<main>’
```
That means that Ruby wasn’t able to process adding (or pushing in coding words) the specific team you created inside of the total collection of teams.

How come? Because that @symbol only helps to process or use variables from one instance method to another instance method, NOT outside of that instance. In our case, we are trying to persist and then return the total of our Class.

In order for a variable to be accessible throughout an entire class, you will need to throw another @ symbol at our variable, ex. @@all. Try adding that to the code.

Your code should look like this:
```rb
class Team
@@all = []
    def initialize(name)
        @name = name
        @@all << self
    end

    def name
        @name
    end

    def self.all
        @@all
    end
end
```
In the console, create a few instances. Then run Team.all. A Class Variable is a variable that is accessible to the class as a whole. It comes in handy for any class methods or any time you want to retain information from an entire class, ex. our list of teams we want to persist.

---

Why so many different types? Why couldn’t the men and women of the council of Ruby just have any variable set within a class work for the entire class??

There are a few reasons:
1. This allows us to use the same variable name for different instances inside of our code, as writing variables with the same name can get confusing, break your code and is not usually recommended;
2. We always want our code to be as exact as possible, more readily understood where and what each piece of code can and does accomplish;
3. Perhaps most importantly, by setting the different variables apart we are not giving extra power to a variable that shouldn’t be used outside of its specifications and causing us unnecessary headaches and requiring more local memory;

Just to sum up:

**Local Variable** — regular variable only accessible within its method ex. name

**Instance Variable** — Accessible between different methods within a class, however not for a class ex. @name

**Class Variable** — Accessible anywhere in the class. ex. @@name.

Hope this was helpful in any way, best of luck to any new coders out there, Enjoy Ruby!