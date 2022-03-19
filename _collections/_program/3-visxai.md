---
layout: page
title: 'VISxAI 2022'
permalink: '/program/visxai/'
collection: program
date: 2022-03-10
---

# Session 1: AI for VIS Representation and Prediction (Chair: Junpeng Wang) {#session1}

## 9:00-10:00: Opening and Invited Talk: Hanqi Guo

Title
: Intelligent Visualization for Science

Abstract
: Today’s and future supercomputers enable scientists to accomplish large-scale simulations for earth system science, cosmology, and fluid dynamics and produce data at an unimaginable scale than previously possible.  However, scientific data's ever-increasing volume and complexity pose grand challenges to visualization and data understanding.  At the same time, the rapid development of artificial intelligence (AI) necessitates new paradigms to incorporate AI in visualization workflows to accelerate scientific discoveries.  

    This talk will narrate three directions of using AI---intelligent infrastructure, filters, and surrogates---in scientific visualization workflows with our recent research.  First, we build intelligent infrastructures to accelerate visualization algorithms.  I’ll demonstrate how online-learning models could improve I/O performance and scalability of particle tracing for visualizing large-scale fluid flow data.  Second, we innovate intelligent filters to substitute visualization algorithms.  I’ll exemplify how deep neural networks excel in feature extraction and tracking in applications such as fusion plasma simulations.  Third, we create intelligent surrogates to replace expensive visualization pipelines.  I’ll present how surrogate models can synthesize and represent data and visualization results.  I will summarize our multidisciplinary experiences researching intelligent visualization for sciences at the end of this talk. 

Bio
: Dr. Hanqi Guo is a Computer Scientist in the Mathematics and Computer Science (MCS) Division of Argonne National Laboratory.  He combines a unique background in visualization, high-performance computing, and artificial intelligence to lead several multidisciplinary DOE- and NSF-sponsored projects involving physicists, computer scientists, and mathematicians to address grand data challenges in computer science and domain sciences.  Dr. Guo has published more than 50 papers and received the Best Paper Award in IEEE VIS 2019, Best Paper Award in IEEE PacificVis 2021, and several best paper honorable mentions in premier visualization conferences.  Before starting his staff position in 2017, he received the Postdoctoral Performance Award in Basic Research in Argonne National Laboratory.



## 10:00-10:20:

Title
: A Machine Learning Approach for Predicting Human Shortest Path Task Performance

- Shijun Cai (The University of Sydney)
- Seok-Hee Hong (The University of Sydney)
- Xiaobo Xia (The University of Sydney)
- Tongliang Liu (The University of Sydney)
- Weidong Huang (The University of Sydney)

Abstract
: Finding a shortest path for a given pair of vertices in a graph drawing is one of the fundamental tasks for qualitative evaluation of graph drawings. In this paper, we present the first machine learning approach to predict human shortest path task performance, including accuracy, response time, and mental effort. To predict the shortest path task performance, we utilize correlated quality metrics and the ground truth data from the shortest path experiments. Specifically, we introduce path faithfulness metrics and show strong correlations with the shortest path task performance. Moreover, to mitigate the problem of insufficient ground truth training data, we use the transfer learning method to pre-train our deep model, exploiting the correlated quality metrics. Experimental results using the ground truth human shortest path experiment data show that our models can successfully predict the shortest path task performance. In particular, model MSP achieves the MSE (i.e., test mean square error) of 0.7243 (i.e., data range from −17.27 to 1.81) for prediction.

## 10:20-10:40:

Title
: VCNet: A Generative Model for Volume Completion

- Jun Han (University of Notre Dame)
- Chaoli Wang (University of Notre Dame)

Abstract
: We present VCNet, a new deep learning approach for volume completion by synthesizing missing subvolumes. Our solution leverages a generative adversarial network (GAN) that learns to complete volumes using the adversarial and volumetric losses. The core design of VCNet features dilated residual block and long-term connection. During training, VCNet first randomly masks basic subvolumes (e.g., cuboids, slices) from complete volumes and learns to recover them. Moreover, we design a two-stage algorithm for stabilizing and accelerating network optimization. Once trained, VCNet takes an incomplete volume as input and automatically identifies and fills in the missing subvolumes with high quality. We quantitatively and qualitatively test VCNet with volumetric data sets of various characteristics to demonstrate its effectiveness. We also compare VCNet against a diffusion-based solution and two GAN-based solutions.


---
# Session 2: Design and Evaluation of VIS-Assisted AI (Chair: Takanori Fujiwara) {#session2}

## 11:10-12:10: Invited Talk: Yong Wang 

Visualization Meets AI: Automated Visualization Design and Evaluation

Abstract
: Data visualization has been applied to facilitate data exploration in various applications. However, the design and evaluation of visualizations still require lots of manual effort. Existing visualization creation tools and packages (e.g., Tableau and D3) often require tedious manual specifications or programming, and the evaluation of visualizations often relies on subjective evaluations like user studies. It is still not an easy task to quickly create and evaluate visualizations, especially for non-expert users. The rapid development of artificial intelligence (AI) and the accumulation of visualization datasets have made it possible to address these issues by leveraging AI techniques. In this talk, I will briefly introduce our recent work on AI-powered data visualization:
AI for visualization design: how can AI techniques facilitate an end-to-end and explainable visualization generation/recommendation?
AI for visualization evaluation: how can AI techniques enable automated evaluation of visualization quality and similarity?
This talk ends with a discussion on future research opportunities.

Bio
: Dr. Yong Wang is a tenure-track assistant professor at the School of Computing and Information Systems, Singapore Management University (SMU). His research interests include information visualization, visual analytics and machine learning. His work has been published at premier venues in visualization and human-computer interaction, such as IEEE VIS, IEEE TVCG, and ACM SIGCHI. He received multiple paper awards, including the Best Paper Honorable Mention Award at IEEE VIS 2021, Best Poster Award at IEEE VIS 2019 and Best Paper Award at ACM IUI 2017. He also has served as a program committee for PacificVis, IEEE VIS, CIKM, and a session chair and program committee for IUI. Prior to joining SMU, he obtained his Ph.D degree from The Hong Kong University of Science and Technology. For more details, please refer to http://yong-wang.org/ .


## 12:10-12:30: Trinary tools for Continuously Valued Binary Classifiers

- Michael Gleicher (University of Wisconsin–Madison)
- Xinyi Yu (University of Wisconsin–Madison)
- Yuheng Chen (University of Wisconsin–Madison)

Abstract
: Classification methods for binary (yes/no) tasks often produce a continuously valued score. Machine learning practitioners must perform model selection, calibration, discretization, performance assessment, tuning, and fairness assessment. Such tasks involve examining classifier results, typically using summary statistics and manual examination of details. In this paper, we provide an interactive visualization approach to support such continuously-valued classifier examination tasks. Our approach addresses the three phases of these tasks: calibration, operating point selection, and examination. We enhance standard views and introduce task-specific views so that they can be integrated into a multi-view coordination (MVC) system. We build on an existing comparison-based approach, extending it to continuous classifiers by treating the continuous values as trinary (positive, unsure, negative) even if the classifier will not ultimately use the 3-way classification. We provide use cases that demonstrate how our approach enables machine learning practitioners to accomplish key tasks.


## 12:30-12:50

Title
: New Guidance for Using t-SNE: Alternative Defaults, Hyperparameter Selection Automation, and Comparative Evaluation

- Robert Gove (Two Six Technologies)
- Lucas Cadalzo (Two Six Technologies)
- Nicholas Leiby (Two Six Technologies)
- Jedediah M. Singer (Two Six Technologies)
- Alexander Zaitzeff (Two Six Technologies)

Abstract
: We present new guidelines for choosing hyperparameters for t-SNE and an evaluation comparing these guidelines to current ones. These guidelines include a proposed empirically optimum guideline derived from a t-SNE hyperparameter grid search over a large collection of data sets. We also introduce a new method to featurize data sets using graph-based metrics called scagnostics; we use these features to train a neural network that predicts optimal t-SNE hyperparameters for the respective data set. This neural network has the potential to simplify the use of t-SNE by removing guesswork about which hyperparameters will produce the best embedding. We evaluate and compare our neural network-derived and empirically optimum hyperparameters to several other t-SNE hyperparameter guidelines from the literature on 68 data sets. The hyperparameters predicted by our neural network yield embeddings with similar accuracy as the best current t-SNE guidelines. Using our empirically optimum hyperparameters is simpler than following previously published guidelines but yields more accurate embeddings, in some cases by a statistically significant margin. We find that the useful ranges for t-SNE hyperparameters are narrower and include smaller values than previously reported in the literature. Importantly, we also quantify the potential for future improvements in this area: using data from a grid search of t-SNE hyperparameters we find that an optimal selection method could improve embedding accuracy by up to two percentage points over the methods examined in this paper.
