---
layout: project
---

<div style="text-align: center; margin-bottom: 30px;">
  <h1 style="margin-bottom: 15px;">Electricity Consumption Forecasting — End-to-End ML Pipeline</h1>
  
  <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 10px; margin-bottom: 25px;">
    <span style="background: #f0f0f0; padding: 3px 12px; border-radius: 15px; font-size: 0.8em; border: 1px solid #ddd; color: #555;">Data Science</span>
    <span style="background: #f0f0f0; padding: 3px 12px; border-radius: 15px; font-size: 0.8em; border: 1px solid #ddd; color: #555;">Time Series</span>
    <span style="background: #f0f0f0; padding: 3px 12px; border-radius: 15px; font-size: 0.8em; border: 1px solid #ddd; color: #555;">Machine Learning</span>
  </div>

  <a href="https://github.com/votre-lien" style="text-decoration: none; color: black; border: 1px solid black; padding: 5px 12px; border-radius: 5px; font-size: 0.9em;">
    💻 Source code
  </a>
</div>

* TOC
{:toc}


## Project description : 

This project builds a production-ready ML pipeline that forecasts French electricity consumption 48 hours ahead. It pulls real-time data daily from the RTE API, cleans and stores 55,000+ hours of historical records in a PostgreSQL database hosted on Supabase, and generates probabilistic predictions using Chronos-2 — Amazon's state-of-the-art time series foundation model — fine-tuned with LoRA on French consumption patterns. The full pipeline runs autonomously via a cron job, with structured logging and automatic gap handling. The final model achieves a 3.04% MAPE on held-out data, outperforming the zero-shot baseline (4.79% MAPE).

<div style="display: flex; justify-content: space-between; align-items: center; padding: 20px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee; margin: 20px 0;">
  
  <div style="flex: 1; text-align: center; border-right: 1px solid #eee;">
    <span style="display: block; font-size: 1.8em; font-weight: bold; color: #000000;">55,000+ hours</span>
    <span style="font-size: 0.85em; text-transform: uppercase; color: #666; letter-spacing: 1px;">of historical records</span>
  </div>

  <div style="flex: 1; text-align: center; border-right: 1px solid #eee;">
    <span style="display: block; font-size: 1.8em; font-weight: bold; color: #000000;">3.04%</span>
    <span style="font-size: 0.85em; text-transform: uppercase; color: #666; letter-spacing: 1px;">MAPE</span>
  </div>

  <div style="flex: 1; text-align: center;">
    <span style="display: block; font-size: 1.8em; font-weight: bold; color: #000000;">-40%</span>
    <span style="font-size: 0.85em; text-transform: uppercase; color: #666; letter-spacing: 1px;">Temps de calcul</span>
  </div>

</div>


### 1. Suggest hypotheses about the causes of observed phenomena

This project is structured around four independent layers that communicate through a central PostgreSQL database.

The data ingestion layer runs as a daily cron job on a local machine. It authenticates against the RTE API, fetches the last 24 hours of realized electricity consumption for mainland France, cleans the raw 15-minute data into hourly averages, and inserts it into Supabase with conflict handling to avoid duplicates.

The modeling layer runs on Google Colab (GPU). A Chronos-2 foundation model is fine-tuned via LoRA on the full historical dataset and generates 48-hour probabilistic forecasts, which are stored back into Supabase alongside confidence intervals.

The serving layer is a Streamlit application that reads directly from Supabase and displays historical consumption, forecasts, and prediction intervals in an interactive dashboard.

The storage layer is a PostgreSQL database hosted on Supabase, acting as the single source of truth for both historical data and predictions.

<div style="text-align: center; margin: 20px 0;">
  <img src="images/architecture.png?raw=true" class="zoom-img" alt="Description de l'image">
  <p style="font-style: italic; color: #666; margin-top: 10px; font-size: 0.9em;">
    Description of the architecture
  </p>
</div>

```javascript
if (isAwesome){
  return true
}
```


On remarque que le modèle suit la loi normale : $X \sim \mathcal{N}(\mu, \sigma^2)$


### 2. Assess assumptions on which statistical inference will be based

```javascript
if (isAwesome){
  return true
}
```

### 3. Support the selection of appropriate statistical tools and techniques


<div style="text-align: center; margin: 20px 0;">
  <img src="images/dummy_thumbnail.jpg?raw=true" class="zoom-img" alt="Description de l'image">
  <p style="font-style: italic; color: #666; margin-top: 10px; font-size: 0.9em;">
    Ceci est la description de mon image en italique et centrée
  </p>
</div>

### 4. Provide a basis for further data collection through surveys or experiments

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).
