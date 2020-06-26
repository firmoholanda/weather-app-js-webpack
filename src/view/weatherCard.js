const weatherCard =

`
<div class="row py-3 d-flex justify-content-center">
  <div class="col-md-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title" id="city">###</h5>
        <h4 class="card-text" id="temperature">###</h4>
        <p class="card-text" id="weatherDescription">###</p>

        <table class="table table-striped table-bordered table-condensed" id="weather-widget-table">
          <tbody>
            <tr>
              <td>pressure</td>
              <td id="ressure">###</td>
            </tr>
            <tr>
              <td>humidity</td>
              <td id="humidity">###</td>
            </tr>
            <tr>
              <td>wind</td>
              <td id="wind">###</td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="card-footer text-muted text-right" id="updatedAt">###</div>
    </div>
  </div>
</div>

`

export default weatherCard;
