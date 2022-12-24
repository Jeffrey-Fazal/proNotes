# Creating a background with full width

Generally an image

```css
  body {
  background-image: url("../images/background.png");
  background-repeat: no-repeat;
  background-size: cover; 
```

# Ensuring that texts wraps in a container

A common issue in CSS is that by default the text will overshoot a container. This trick will force the text to stay inside, but you need to ensure that elements around it are also responsive. 

```css
word-wrap: break-word;  
```
