<h2>Big O</h2>

<p>The section starts with what Big O is from an academic point of view by explaining Big O, Big Theta, and Big Omega. Look for cheat sheets for big O under BigO directory. 
</p>
<ul>
<li><b>Big O</b> – describes an upper bound on the time.</li>
<li><b>Big Omega Ω</b> – is the equivalent concept but for the lower bound.</li>
<li><b>Big Theta Θ</b> – means both O and Ω. That is, an algorithm is Θ(N) if it is both O(N)and Ω(N). Θ give the tight bound on runtime. </li>
</ul>

<p>In industry (and therefore in interviews), people seem to have merged Θ and O together. Industry’s meaning of big O is closer to what academics mean by Θ, in that it would be seen as incorrect to describe printing an array as O(N^2). Industry would just say this is O(N). 
</p>

<h3>Space Complexity<h3>
<ul>
<li>Time is not the only thing that matters in an algorithm. We might also care about the amount of memory or space- required by an algorithm. </li>
<li>Space complexity is a parallel concept to time complexity.</li>
</ul>

<h3>Drop the Constant</h3>
<ul>
<li>It is very possible for O(N) code to run faster than O(1) code for specific inputs. Big O just describes the rate of increase.</li>

<li>For this reason, we drop constants in runtime. An algorithm that one might have described as O(2N) is actually O(N).
</li>
</ul>

<h3>Drop the Non-Dominant Terms</h3>
<ul><li>What do you do about an expression such as O(N^2 + N)? That second N isn’t exactly a constant. But it’s not especially important. So this becomes O(N^2).</li></ul>
<h3>Multi-Part Algorithms: Add vs Multiply</h3>
<ul>
<li>Suppose you have an algorithm that has two steps. When do you multiply the runtimes, and when do you add them? 
<ul>
<li>If your algorithm is in the form “do this, then, when you’re done, do that” then you add the runtimes. i.e O(a+b)</li>
<li>If your algorithm is in the form “do this for each time you do that” then you multiply the runtimes. i.e. O(ab)</li>
</ul>
</li>
</ul>
<h3>Log N Runtimes</h3>
<ul>
<li>When you see a problem where the number of elements in the problem space gets halved each time, that will likely be a O(log N) runtime. </li>
</ul>
<h3>Recursive Algorithms</h3>
When you have a recursive function that makes multiple calls, the runtime will often (but not always) look like O(branches^depth), where branches is the number of times each recursive call branches.
