  <template>
  <div class="filter_side">
    <h3>Filter</h3>
    <div class="filter_inner">
      <ul>
        <li>
          <a href="#">All Categories <span>(25)</span> </a>
        </li>
        <li>
          <a href="#">Food/Agriculture <span>(25)</span> </a>
        </li>
        <li>
          <a href="#">Fashion <span>(25)</span> </a>
        </li>
      </ul>
    </div>
    <div class="range-slider">
      <input class="range_input" value="1000" min="1000" max="50000" step="500" type="range" />
      <input class="range_input" value="50000" min="1000" max="50000" step="500" type="range" />
      <span class="rangeValues"></span>

    </div>
  </div>
</template>
        
  
<script>
export default {
  name: "FilterSidebar",
};
</script>