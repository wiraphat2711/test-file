<template>
  <div id="sci">
    <h1>Faculty of Science</h1>
    <h4>1 : {{name1}}</h4>
    <h4>2 : {{name2}}</h4>
    <h4>3 : {{name3}}</h4>
    <h4>4 : {{name4}}</h4>
    <h4>5 : {{name5}}</h4>
    <h4>6 : {{name6}}</h4>
    <button>gogogo</button>
    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <i class="fab fa-algolia"></i>
    <b-card-body>
        <b-card-title>hello</b-card-title>
        <b-card-text>
            Wiraphat
        </b-card-text>
    </b-card-body>
  </div>
</template>

<script>
export default {
  name: "sc",
  data() {
    return {
      name1: "IT",
      name2: "environment",
      name3: "comsci",
      name4: "physics",
      name5: "chemical",
      name6: "applied mathematics"
    };
  },
};

</script>
    
<style>
    test {
  font-size: 9 em;
}
#sci{
    background-color: wheat;
    color: green;
}
</style>