const talks = {
  "index": {
    "10.1109/TVCG.2021.3101418": {
      "authors": [
        "Gleb Tkachev (Universitat Stuttgart)",
        "Steffen Frey (University of Groningen)",
        "Thomas Ertl (Universitaet Stuttgart)"
      ],
      "Paper ID": "10.1109/TVCG.2021.3101418",
      "Title": "S4: Self-Supervised learning of Spatiotemporal Similarity",
      "Abstract": "We introduce an ML-driven approach that enables interactive example-based queries for similar behavior in ensembles of spatiotemporal scientific data. This addresses an important use case in the visual exploration of simulation and experimental data, where data is often large, unlabeled and has no meaningful similarity measures available. We exploit the fact that nearby locations often exhibit similar behavior and train a Siamese Neural Network in a self-supervised fashion, learning an expressive latent space for spatiotemporal behavior. This space can be used to find similar behavior with just a few user-provided examples. We evaluate this approach on several ensemble datasets and compare with multiple existing methods, showing both qualitative and quantitative results.",
      "type": "TVCG talk"
    },
    "1158": {
      "authors": [
        "Tobias Rapp (Karlsruhe Institute of Technology)",
        "Christoph Peters (Karlsruhe Institute of Technology)",
        "Carsten Dachsbacher (Karlsruhe Institute of Technology)"
      ],
      "Paper ID": 1158,
      "Title": "Image-based Visualization of Large Volumetric Data Using Moments",
      "type": "PPaper",
      "Abstract": "We present a novel image-based representation to interactively visualize large and arbitrarily structured volumetric data. This image-based representation is created from a fixed view and models the scalar densities along each viewing ray. Then, any transfer\nfunction can be applied and changed interactively to visualize the data. In detail, we transform the density in each pixel to the Fourier basis and store Fourier coefficients of a bounded signal, i.e. bounded trigonometric moments. To keep this image-based representation compact, we adaptively determine the number of moments in each pixel and present a novel coding and quantization strategy. Additionally, we perform spatial and temporal interpolation of our image representation and discuss the visualization of introduced uncertainties. Moreover, we use our representation to add single scattering illumination. Lastly, we achieve accurate results even with changes in the view configuration. We evaluate our approach on two large volume datasets and a time-dependent SPH dataset.",
      "show_abstract": false
    },
    "2382": {
      "authors": [
        "Jiacheng Yu (Peking University)",
        "Yifan Hu (Yahoo Research)",
        "Xiaoru Yuan (Peking University)"
      ],
      "Paper ID": 2382,
      "Title": "UNICON: A UNIform CONstraint Based Graph Layout Framework",
      "type": "Paper",
      "Abstract": "We propose UNICON, a UNIform CONstraint based graph layout framework that supports both soft and hard constraints. We extend the stress model to accommodate soft constraints by incorporating them in the objective functions, optimized by stochastic gradient descent. For hard constraints, such as inequalities or equalities in the layout space, we utilize a gradient projection method to satisfy them. A visualization prototype system is implemented based on this framework for the user to interactively add or remove constraints to generate the desired layouts. We demonstrate the efficiency, quality, and flexibility of the framework and the system on a number of datasets with a wide range of user-defined constraints.",
      "show_abstract": false
    },
    "4701": {
      "authors": [
        "Alexander Vieth (Delft University of Technology )",
        "Anna Vilanova (Eindhoven University of Technology)",
        "Boudewijn Lelieveldt (Leiden University Medical Center)",
        "Elmar Eisemann (Delft University of Technology)",
        "Thomas H\u00f6llt (TU Delft)"
      ],
      "Paper ID": 4701,
      "Title": "Incorporating Texture Information into Dimensionality Reduction for High-Dimensional Images",
      "type": "Paper",
      "Abstract": "High-dimensional imaging is becoming increasingly relevant in many fields from astronomy and cultural heritage to systems biology.\nVisual exploration of such high-dimensional data is commonly facilitated by dimensionality reduction.\nHowever, common dimensionality reduction methods do not include spatial information present in images, such as local texture features, into the construction of low-dimensional embeddings.\nConsequently, exploration of such data is typically split into a step focusing on the attribute space followed by a step focusing on spatial information, or vice versa.\nIn this paper, we present a method for incorporating spatial neighborhood information into distance-based dimensionality reduction methods, such as t-Distributed Stochastic Neighbor Embedding (t-SNE).\nWe achieve this by modifying the distance measure between high-dimensional attribute vectors associated with each pixel such that it takes the pixel's spatial neighborhood into account.\nBased on a classification of different methods for comparing image patches, we explore a number of different approaches.\nWe compare these approaches from a theoretical and experimental point of view. \nFinally, we illustrate the value of the proposed methods by qualitative and quantitative evaluation on synthetic data and two real-world use cases.",
      "show_abstract": false
    },
    "4981": {
      "authors": [
        "Pengfei Gu (University of Notre Dame)",
        "Jun Han (University of Notre Dame)",
        "Danny Chen (University of Notre Dame)",
        "Chaoli Wang (University of Notre Dame)"
      ],
      "Paper ID": 4981,
      "Title": "Scalar2Vec: Translating Scalar Fields to Vector Fields via Deep Learning",
      "type": "Paper",
      "Abstract": "We introduce Scalar2Vec, a new deep learning solution that translates scalar fields to velocity vector fields for scientific visualization. Given multivariate or ensemble scalar field volumes and their velocity vector field counterparts, Scalar2Vec first identifies suitable variables for scalar-to-vector translation. It then leverages a k-complete bipartite translation network (kCBT-Net) to complete the translation task. kCBT-Net takes a set of sampled scalar volumes of the same variable as input, extracts their multi-scale information, and learns to synthesize the corresponding vector volumes. Ground-truth vector fields and their derived quantities are utilized for loss computation and network training. After training, Scalar2Vec can infer unseen velocity vector fields of the same data set directly from their scalar field counterparts. We demonstrate the effectiveness of Scalar2Vec with quantitative and qualitative results on multiple data sets and compare it with three other state-of-the-art deep learning methods.",
      "show_abstract": false
    },
    "5060": {
      "authors": [
        "Harsh Bhatia (Lawrence Livermore National Laboratory)",
        "Duong Hoang (University of Utah)",
        "Nate Morrical (University of Utah)",
        "Valerio Pascucci (University of Utah)",
        "Peer-Timo Bremer (Lawrence Livermore National Laboratory)",
        "Peter Lindstrom (Lawrence Livermore National Laboratory)"
      ],
      "Paper ID": 5060,
      "Title": "AMM: Adaptive Multilinear Meshes",
      "type": "PPaper",
      "Abstract": "Adaptive representations are increasingly indispensable for reducing the in-memory and on-disk footprints of large-scale data. Usual solutions are designed broadly along two themes: reducing data precision, e.g., through compression, or adapting data resolution, e.g., using spatial hierarchies. Recent research suggests that combining the two approaches, i.e., adapting both resolution and precision simultaneously, can offer significant gains over using them individually. However, there currently exist no practical solutions to creating and evaluating such representations at scale. In this work, we present a new resolution-precision-adaptive representation to support hybrid data reduction schemes and offer an interface to existing tools and algorithms. Through novelties in spatial hierarchy, our representation, Adaptive Multilinear Meshes (AMM), provides considerable reduction in the mesh size. AMM creates a piecewise multilinear representation of uniformly sampled scalar data and can selectively relax or enforce constraints on conformity, continuity, and coverage, delivering a flexible adaptive representation. AMM also supports representing the function using mixed-precision values to further the achievable gains in data reduction. We describe a practical approach to creating AMM incrementally using arbitrary orderings of data and demonstrate AMM on six types of resolution and precision datastreams. By interfacing with state-of-the-art rendering tools through VTK, we demonstrate the practical and computational advantages of our representation for visualization techniques. With an open-source release of our tool to create AMM, we make such evaluation of data reduction accessible to the community, which we hope will foster new opportunities and future data reduction schemes",
      "show_abstract": false
    },
    "5304": {
      "authors": [
        "Neng Shi (The Ohio State University)",
        "Jiayi Xu (The Ohio State University)",
        "Skylar Wurster (The Ohio State University)",
        "Hanqi Guo (Argonne National Laboratory)",
        "Jonathan Woodring (Los Alamos National Laboratory)",
        "Luke Van Roekel (Los Alamos National Laboratory)",
        "Han-Wei Shen (The Ohio State University)"
      ],
      "Paper ID": 5304,
      "Title": "GNN-Surrogate: A Hierarchical and Adaptive Graph Neural Network for Parameter Space Exploration of Unstructured-Mesh Ocean Simulations",
      "type": "PPaper",
      "Abstract": "We propose GNN-Surrogate, a graph neural network-based surrogate model to explore the parameter space of ocean climate simulations. Parameter space exploration is important for domain scientists to understand the influence of input parameters (e.g., wind stress) on the simulation output (e.g., temperature). The exploration requires scientists to exhaust the complicated parameter space by running a batch of computationally expensive simulations. Our approach improves the efficiency of parameter space exploration with a surrogate model that predicts the simulation outputs accurately and efficiently. Specifically, GNN-Surrogate predicts the output field with given simulation parameters so scientists can explore the simulation parameter space with visualizations from user-specified visual mappings. Moreover, our graph-based techniques are designed for unstructured meshes, making the exploration of simulation outputs on irregular grids efficient. For efficient training, we generate hierarchical graphs and use adaptive resolutions. We give quantitative and qualitative evaluations on the MPAS-Ocean simulation to demonstrate the effectiveness and efficiency of GNN-Surrogate. Source code is publicly available at \\url{https://github.com/trainsn/GNN-Surrogate}.",
      "show_abstract": false
    },
    "5686": {
      "authors": [
        "Sanjana Srabanti (University of Illinois at Chicago)",
        "Michael Tran (University of Illinois at Chicago)",
        "Virginie Achim (University of Illinois at Chicago)",
        "Clifton David Fuller (University of Texas)",
        "Guadalupe Canahuate (University of Iowa)",
        "Fabio Miranda (University of Illinois at Chicago)",
        "G. Elisabeta Marai (University of Illinois at Chicago)"
      ],
      "Paper ID": 5686,
      "Title": "A Tale of Two Centers: Visual Exploration of Health Disparities in Cancer Care",
      "type": "Paper",
      "Abstract": "The annual incidence of head and neck cancers (HNC) worldwide is more than 550,000 cases, with around 300,000 deaths each year. However, the incidence rates and disease-characteristics of HNC differ between treatment centers and different populations, due to undetermined reasons, which may or not include socioeconomic factors. The multi-faceted and multi-variate nature of the data in the context of the emerging field of health disparities research makes automated analysis impractical. Hence, we present a visual analysis approach to explore the health disparities in the data of Head and Neck cancer patients from two different cohorts at two cancer care centers. Our approach integrates data from multiple sources, including census data and city data, with custom visual encodings and with a nearest neighbor approach. Our design, created in collaboration with oncology experts, makes it possible to analyze the patients\u2019 demographic, disease characteristics, treatments and outcomes, and to make significant comparisons of these two cohorts and of individual patients. We evaluate this approach through two case studies performed with domain experts. The results demonstrate that this visual analysis approach successfully accomplishes the goal of comparing two cohorts in terms of different significant factors, and can provide insights into the main source of health disparities between the two centers.",
      "show_abstract": false
    },
    "5799": {
      "authors": [
        "Aditi Mishra (Arizona State University)",
        "Utkarsh Soni (Arizona State University)",
        "Jinbin Huang (Arizona state university)",
        "Chris Bryan (Arizona State University)"
      ],
      "Paper ID": 5799,
      "Title": "Why? Why not? When? Visual Explanations of Agent Behavior in Reinforcement Learning",
      "type": "Paper",
      "Abstract": "Reinforcement learning (RL) is used in many domains, including autonomous driving, robotics, stock trading, and video games. Unfortunately, the black box nature of RL agents, combined with legal and ethical considerations, makes it increasingly important that humans (including those are who not experts in RL) understand the reasoning behind the actions taken by an RL agent, particularly in safety-critical domains. To help address this challenge, we introduce PolicyExplainer, a visual analytics interface which lets the user directly query an autonomous agent. PolicyExplainer visualizes the states, policy, and expected future rewards for an agent, and supports asking and answering questions such as: 'Why take this action? Why not take this other action? When is this action taken?'' PolicyExplainer is designed based upon a domain analysis with RL researchers, and is evaluated via qualitative and quantitative assessments on a trio of domains: taxi navigation, a stack bot domain, and drug recommendation for HIV patients.\nWe find that PolicyExplainer's visual approach promotes trust and understanding of agent decisions better than a state-of-the-art text-based explanation approach. Interviews with domain practitioners provide further validation for PolicyExplainer as applied to safety-critical domains. Our results help demonstrate how visualization-based approaches can be leveraged to decode the behavior of autonomous RL agents, particularly for RL non-experts.",
      "show_abstract": false
    },
    "6148": {
      "authors": [
        "Seok-Hee Hong (University of Sydney)",
        "Amyra Meidiana (University of Sydney)",
        "James George Wood (University of Sydney)",
        "Juan Pablo Bonilla Ataides (University of Sydney)",
        "Peter Eades (University of Sydney)",
        "Kunsoo Park (Seoul National University)"
      ],
      "Paper ID": 6148,
      "Title": "dGG, dRNG, DSC: New Shape-based Faithfulness Metrics for  Large and Complex Graph Visualization",
      "type": "Paper",
      "Abstract": "Shape-based metrics measure how faithfully a drawing D of a large graph G shows the structure of graph, by comparing the similarity between G and a proximity graph P computed from D. Although these metrics can successfully evaluate drawings of large graphs, they are limited to relatively sparse graphs, since existing metrics use planar proximity graphs GG (Gabriel Graph) and RNG (Relative Neighbourhood Graph).\n\nThis paper presents new shape-based faithfulness metrics for evaluating drawings of large and complex graphs, using high-order proximity graphs k-GG and k-RNG. Extensive experiments demonstrate that our new shape-based metrics using degree-based proximity graphs dGG and dRNG can more accurately measure the faithfulness\nof drawings of large and complex graphs, with a significant improvement of over 100% better, on average, than the existing shape-based metrics using GG and RNG.\n\nMoreover, we present a new shape change faithfulness metric DSC for evaluating drawings of dynamic graphs, by measuring how proportional the geometric shape change in the drawings of dynamic graphs is to the ground truth change in dynamic graphs. Validation using deformation experiments support that DSC can accurately\nmeasure shape change faithfulness in dynamic graph drawing.\n\nFurthermore, we present extensive comparison experiments of ten popular graph layouts using our new shape-based metrics dGG, dRNG and DSC, to recommend which layouts can give a better shape-faithful graph drawing for large and complex graphs.",
      "show_abstract": false
    },
    "6250": {
      "authors": [
        "Shilpika Shilpika (University of California, Davis)",
        "Takanori Fujiwara (University of California, Davis)",
        "Naohisa Sakamoto (Kobe University)",
        "Jorji Nonaka (RIKEN Center for Computational Science)",
        "Kwan-Liu Ma (University of California at Davis)"
      ],
      "Paper ID": 6250,
      "Title": "A Visual Analytics Approach for Hardware System Monitoring with Streaming Functional Data Analysis",
      "type": "PPaper",
      "Abstract": "Many real-world applications involve analyzing time-dependent phenomena, which are intrinsically functional, consisting of curves varying over a continuum (e.g., time). When analyzing continuous data, functional data analysis (FDA) provides substantial\nbenefits, such as the ability to study the derivatives and to restrict the ordering of data. However, continuous data inherently has infinite dimensions, and for a long time series, FDA methods often suffer from high computational costs. The analysis problem becomes even more challenging when we must update the FDA results for continuously arriving data. In this paper, we present a visual analytics approach for monitoring and reviewing time series data streamed from a hardware system with a focus on identifying outliers by using FDA. To perform FDA while addressing the computational problem, we introduce new incremental and progressive algorithms that promptly generate the magnitude-shape (MS) plot, which conveys both the functional magnitude and shape outlyingness of time series data. In addition, by using an MS plot in conjunction with an FDA version of principal component analysis, we enhance the analyst\u2019s ability to investigate the visually-identified outliers. We illustrate the effectiveness of our approach with two use scenarios using real-world datasets. The resulting tool is evaluated by industry experts using real-world streaming datasets.",
      "show_abstract": false
    },
    "6863": {
      "authors": [
        "Dana EL-Rushaidat (Purdue University)",
        "Raine Yeh (Google)",
        "Xavier Tricoche (Purdue University )"
      ],
      "Paper ID": 6863,
      "Title": "Boundary-Aware Rectilinear Grid: Accurate Approximation of Unstructured Dataset into Rectilinear Grid with Solid Boundary Handling Capabilities",
      "type": "Paper",
      "Abstract": "Computational fluid dynamics simulations produce increasingly large datasets that are often defined over unstructured grids with solid boundaries. Though unstructured grids allow for the flexible representation of this geometry and the refinement of the grid resolution, they suffer from high storage cost, non-trivial spatial queries, and low reconstruction smoothness. On the other hand, rectilinear grids do not have these drawbacks, but they cannot represent complex boundaries.\nWe present in this paper a technique for the high-quality approximation of large unstructured datasets with solid boundaries onto modified rectilinear grids that we endow with boundary handling capabilities. The resulting data representation can accommodate challenging boundaries while supporting high-order reconstruction kernels with a much-reduced memory footprint. As such, our data representation enjoys all the benefits of conventional rectilinear grids while addressing their fundamental geometric limitations. We demonstrate the proposed approach on several CFD datasets and show that our method achieves an accurate and high-quality approximation of simulation datasets.",
      "show_abstract": false
    },
    "7044": {
      "authors": [
        "Pavol Klacansky (University of Utah)",
        "Attila Gyulassy (University of Utah)",
        "Peer-Timo Bremer (Lawrence Livermore National Laboratory)",
        "Valerio Pascucci (University of Utah)"
      ],
      "Paper ID": 7044,
      "Title": "A Study of the Locality of Persistence-Based Queries and Its Implications on Efficiency of Localized Data Structures",
      "type": "Paper",
      "Abstract": "Scientific datasets are often analyzed and visualized using isosurfaces. The connected components at or above the isovalue defining these isosurfaces are called superlevel-set components. The vertex set of these superlevel-set components can be used to compute local statistics, such as mean temperature or histogram per component, or to segment the data. However, in datasets produced by acquisition devices or simulations noise induces many spurious components which clutter the visualization and analysis results. Many of these spurious components would disappear if the data values were slightly adjusted. The notion of persistence captures the stability of a component with respect to function value changes, and so we are interested in computing persistence quickly. Locality of computation is critical for parallel scalability, minimization of communication in a distributed environment, or an out-of-core processing. The recently introduced merge forest attained high performance by exploiting locality, thereby avoiding communication until needed to resolve a feature query. We extend the merge forest to support persistence-based queries and study the locality of these queries by evaluating the traversals of regions of data during a query. We confirm that the majority of evaluated datasets have the property that the noise is mostly local, and thus can be efficiently eliminated without performing a global analysis. Finally, we compare the query running times with those of a triplet merge tree, because a triplet merge tree answers all proposed queries in constant time and can be constructed from a merge tree in linear time.",
      "show_abstract": false
    },
    "7244": {
      "authors": [
        "Aditi Mishra (Arizona State University)",
        "Shashank Ginjpalli (Arizona State University)",
        "Chris Bryan (Arizona State University)"
      ],
      "Paper ID": 7244,
      "Title": "News Kaleidoscope: Visual Investigation of Coverage Diversity inNews Event Reporting",
      "type": "Paper",
      "Abstract": "When a newsworthy event occurs, media articles that report on and about the event can vary widely in different ways---a concept known as coverage diversity. To help investigate coverage diversity in event reporting, we develop a visual analytics system called NewsKaleidoscope. NewsKaleidoscope combines several backend language processing techniques with a coordinated visualization interface. Notably, NewsKaleidoscope is tailored for visualization non-experts, and adopts an analytic workflow based around subselection analysis, whereby second-level features of articles are extracted to provide a more detailed and nuanced analysis of coverage diversity.\nTo robustly evaluate NewsKaleidoscope, we conduct a trio of user studies. (1) A study with news experts assesses the insights promoted for our targeted journalism-savvy users. (2) A follow-up study with news novices assesses the overall system and the specific insights promoted for journalism-agnostic users. (3) Based on identified system limitations in these two studies, we amend NewsKaleidoscope\u2019s design and conduct a third study to validate these improvements. Results indicate that, for both news novice and experts, NewsKaleidoscope supports an effective, task-driven workflow for analyzing the diversity of news coverage about events, though journalism expertise has a significant influence on the user\u2019s insights and takeaways. Our insights developing and evaluating NewsKaleidoscope can aid future tools that combine visualization with natural language processing to analyze coverage diversity in news event reporting.",
      "show_abstract": false
    },
    "7366": {
      "authors": [
        "Shivam Agarwal (University of Duisburg-Essen)",
        "G\u00fcnter Wallner (Johannes Kepler University Linz)",
        "Jeremy Watson (AI Crowd)",
        "Fabian Beck (University of Duisburg-Essen)"
      ],
      "Paper ID": 7366,
      "Title": "Spatio-temporal Analysis of Multi-agent Scheduling Behaviors on Fixed-track Networks",
      "type": "Paper",
      "Abstract": "Multi-agent systems require coordination among the agents to solve a given task. For movement on fixed-track networks, traditional scheduling algorithms have dominated so far, but the interest in autonomous and intelligent agents is growing as they promise to react to unexpected and exceptional situations more robustly. In this paper, we study data from the Flatland 2020 NeurIPS Competition, where trains move through a virtual rail network. We developed a timeline-based visualization that provides an overview of all train movements in a simulated episode, clearly hinting at different phases, non-optimal routes, and issues such as deadlocks. This view is complemented with a map view and a graph view, interactively linked through highlighting and synchronous animation. Defining regions of interest in the map builds an analysis graph for detailed inspection. A comparison mode allows contrasting two different episodes regarding the same rail network across all views. We have conducted this application study in close collaboration with the Flatland community. Identified analysis goals stem from interviews with key persons of the community, while the approach itself was developed in two iterations based on feedback from experts with diverse backgrounds. This feedback, together with an analysis of the winning submissions from the competition, confirms that the initial analysis goals can be answered.",
      "show_abstract": false
    },
    "7610": {
      "authors": [
        "Shisong Wang (University of Saskatchewan)",
        "Debajyoti Mondal (University of Saskatchewan)",
        "Sara Sadri (University of Saskatchewan)",
        "Chanchal K. Roy (University of Saskatchewan)",
        "Jay Famiglietti (Global Institute of Water Security)",
        "Kevin A. Schneider (University of Saskatchewan)"
      ],
      "Paper ID": 7610,
      "Title": "SET-STAT-MAP: Extending Parallel Sets for Visualizing Mixed Data",
      "type": "Paper",
      "Abstract": "Multi-attribute dataset visualizations are often designed based on attribute types, i.e., whether the attributes are categorical or numerical.  Parallel Sets and Parallel Coordinates are two well-known techniques to visualize categorical and numerical data, respectively. A common strategy to visualize mixed data is to use multiple information linked view, e.g., Parallel Coordinates are often augmented with maps to explore spatial data with numeric attributes. In this paper, we design visualizations for mixed data, where the dataset may include numerical, categorical, and spatial attributes. The proposed solution Set-Stat-Map is a harmonious combination of three interactive components: Parallel Sets (visualizes sets determined by the combination of categories or numeric ranges), statistics columns (visualizes numerical summaries of the sets), and a geospatial map view (visualizes the spatial information). We augment these components with colors and textures to enhance users' capability of analyzing distributions of pairs of attribute combinations. To improve scalability, we merge the sets to limit the number of possible combinations to be rendered on the display. We demonstrate the use of Set-Stat-Map using two different types of datasets: a meteorological dataset and an online vacation rental dataset (Airbnb). To examine the potential of the system, we collaborated with the meteorologists, which revealed both challenges and opportunities for Set-Stat-Map to be used for real-life visual analytics.",
      "show_abstract": false
    },
    "8231": {
      "authors": [
        "Jacob Miller (University of Arizona)",
        "Stephen Kobourov (University of Arizona)",
        "Vahan Huroyan (University of Arizona)"
      ],
      "Paper ID": 8231,
      "Title": "Browser-based Hyperbolic Visualization of Graphs",
      "type": "Paper",
      "Abstract": "Hyperbolic geometry offers a natural \u2018focus+context\u2019 for data visualization and has been shown to underlie real-world complex networks. However, current hyperbolic network visualization approaches are limited to special types of networks and do not scale to large datasets. With this in mind, we designed, implemented, and analyzed three methods for hyperbolic visualization of networks in the browser based on inverse projections, generalized force-directed algorithms, and hyperbolic multi-dimensional scaling (H-MDS). A comparison with Euclidean MDS shows that H-MDS produces embeddings with lower distortion for several types of networks. All three methods can handle node-link and node-link-group representations and are available in a fully functional web-based system.",
      "show_abstract": false
    },
    "8250": {
      "authors": [
        "Yun-Hsin Kuo (University of California, Davis)",
        "Takanori Fujiwara (University of California, Davis)",
        "Charles C.-K. Chou (Academia Sinica)",
        "Chun-houh Chen (Academia Sinica)",
        "Kwan-Liu Ma (University of California, Davis)"
      ],
      "Paper ID": 8250,
      "Title": "A Machine-Learning-Aided Visual Analysis Workflow for Investigating Air Pollution Data",
      "type": "Paper",
      "Abstract": "Analyzing air pollution data is challenging as there are various analysis focuses from different aspects: feature (what), space (where), and time (when). As in most geospatial analysis problems, besides high-dimensional features, the temporal and spatial dependencies of air pollution induce the complexity of performing analysis. Machine learning methods, such as dimensionality reduction, can extract and summarize important information of the data to lift the burden of understanding such a complicated environment. In this paper, we present a methodology that utilizes multiple machine learning methods to uniformly explore these aspects. With this methodology, we develop a visual analytic system that supports a flexible analysis workflow, allowing domain experts to freely explore different aspects based on their analysis needs. We demonstrate the capability of our system and analysis workflow supporting a variety of analysis tasks with multiple use cases.",
      "show_abstract": false
    },
    "8469": {
      "authors": [
        "Pavol Klacansky (University of Utah)",
        "Haichao Miao (Lawrence Livermore National Laboratory)",
        "Attila Gyulassy (University of Utah)",
        "Andrew Townsend (LLNL)",
        "Kyle Champley (LLNL)",
        "Joe Tringe (LLNL)",
        "Valerio Pascucci (University of Utah)",
        "Peer-Timo Bremer (Lawrence Livermore National Laboratory)"
      ],
      "Paper ID": 8469,
      "Title": "Virtual Inspection of Additively Manufactured Parts",
      "type": "Paper",
      "Abstract": "Advanced manufacturing techniques, such as additive manufacturing, enable the design of increasingly complex components for a wide range of industrial applications.\nHowever, this complexity makes qualification of the parts, determining whether a part is within some margin of error from the initial design, difficult.\nTo inspect and qualify complex internal geometries that are not accessible with an external probe, parts are typically scanned with computed tomography (CT), and manually compared to the computer-aided design (CAD) model using visual inspections.\nMatching the CAD model to the 3D reconstructed object is challenging in a traditional desktop environment due to the lack of depth perception and 3D interaction.\nAn additional challenge comes from the geometric complexity of CAD meshes and large-scale CT scans.\nWe present a virtual reality (VR) system for manual qualification, providing a novel defect visualization method. First, we describe a semiautomatic CAD-to-scan Registration approach in VR using a finite element mesh.\nSecond, we introduce the Defect Box, which enables full-resolution inspection for massive scans and CAD-CT comparison of local defect regions.\nFinally, our system includes intuitive 3D Metrology methods that enable natural interactions for the measurement of features and defects in VR.\nWe demonstrate our approach on both real and synthetic data and discuss feedback from four expert users in nondestructive qualification.",
      "show_abstract": false
    },
    "8813": {
      "authors": [
        "Chengbo Zheng (Hong Kong University of Science and Technology)",
        "Xiaojuan Ma (Hong Kong University of Science and Technology)"
      ],
      "Paper ID": 8813,
      "Title": "Evaluating the Effect of Enhanced Text-Visualization Integration on Combating Misinformation in Data Story",
      "type": "Paper",
      "Abstract": "Misinformation has disruptive effects on our lives. Many researchers have looked into means to identify and combat misinformation in text or data visualization. However, there is still a lack of understanding of how misinformation can be introduced when text and visualization are combined to tell data stories, not to mention how to improve the lay public\u2019s awareness of possible misperceptions about facts in narrative visualization. In this paper, we \ufb01rst analyze where misinformation could possibly be injected into the productionconsumption process of data stories through a literature survey. Then, as a \ufb01rst step towards combating misinformation in data stories, we explore possible defensive design methods to enhance the reader\u2019s awareness of information misalignment when data facts are scripted and visualized. More speci\ufb01cally, we conduct a between-subjects crowdsourcing study to investigate the impact of two design methods enhancing text-visualization integration, i.e., explanatory annotation and interactive linking, on users\u2019 awareness of misinformation in data stories. The study results show that although most participants still can not \ufb01nd misinformation, the two design methods can significantly lower the perceived credibility of the text or visualizations. Our work informs the possibility of \ufb01ghting an infodemic through defensive design methods.",
      "show_abstract": false
    },
    "8907": {
      "authors": [
        "Xiwei Xuan (University of California, Davis)",
        "Xiaoyu Zhang (University of California, Davis)",
        "Oh-Hyun Kwon (University of California, Davis)",
        "Kwan-Liu Ma (University of California at Davis)"
      ],
      "Paper ID": 8907,
      "Title": "VAC-CNN: A Visual Analytics System for Comparative Studies of Deep Convolutional Neural Networks",
      "type": "PPaper",
      "Abstract": "The rapid development of Convolutional Neural Networks (CNNs) in recent years has triggered significant breakthroughs in many machine learning (ML) applications. The ability to understand and compare various CNN models available is thus essential. The conventional approach with visualizing each model's quantitative features, such as classification accuracy and computational complexity, is not sufficient for a deeper understanding and comparison of the behaviors of different models. Moreover, most of the existing tools for assessing CNN behaviors only support comparison between two models and lack the flexibility of customizing the analysis tasks according to user needs. This paper presents a visual analytics system, VAC-CNN (Visual Analytics for Comparing CNNs), that supports the in-depth inspection of a single CNN model as well as comparative studies of two or more models. The ability to compare a larger number of (e.g., tens of) models especially distinguishes our system from previous ones. With a carefully designed model visualization and explaining support, VAC-CNN facilitates a highly interactive workflow that promptly presents both quantitative and qualitative information at each analysis stage. We demonstrate VAC-CNN's effectiveness for assisting novice ML practitioners in evaluating and comparing multiple CNN models through two use cases and one preliminary evaluation study using the image classification tasks on the ImageNet dataset.",
      "show_abstract": false
    },
    "9879": {
      "authors": [
        "Dominik Vietinghoff (Leipzig University)",
        "Michael B\u00f6ttinger (German Climate Computing Center (DKRZ))",
        "Gerik Scheuermann (Leipzig University)",
        "Christian Heine (Leipzig University)"
      ],
      "Paper ID": 9879,
      "Title": "Detecting Critical Points in 2D Scalar Field Ensembles Using Bayesian Inference",
      "type": "Paper",
      "Abstract": "In an era of quickly growing data set sizes, information reduction methods such as extracting or highlighting characteristic features become more and more important for data analysis. For single scalar fields, topological methods can fill this role by extracting and relating critical points. While such methods are regularly employed to study single scalar fields, it is less well studied how they can be extended to uncertain data, as produced, e.g., by ensemble simulations.\n\nMotivated by our previous work on visualization in climate research, we study new methods to characterize critical points in ensembles of 2D scalar fields. Previous work on this topic either assumed or required specific distributions, did not account for uncertainty introduced by approximating the underlying latent distributions by a finite number of fields, or did not allow to answer all our domain experts' questions. In this work, we use Bayesian inference to estimate the probability of critical points, either of the original ensemble or its bootstrapped mean. This does not make any assumptions on the underlying distribution and allows to estimate the sensitivity of the results to finite-sample approximations of the underlying distribution. We use color mapping to depict these probabilities and the stability of their estimation. The resulting images can, e.g., be used to estimate how precise the critical points of the mean-field are. We apply our method to synthetic data to validate its theoretical properties and compare it with other methods in this regard. We also apply our method to the data from our previous work, where it provides a more accurate answer to the domain experts' research questions.",
      "show_abstract": false
    },
    "1000": {
      "authors": [
        "Angelos Chatzimparmpas (Linnaeus University)",
        "Vilhelm Park (Linnaeus University)",
        "Andreas Kerren (Linnaeus University)"
      ],
      "Paper ID": 1000,
      "Title": "Evaluating StackGenVis with a Comparative User Study",
      "type": "Note",
      "Abstract": "Stacked generalization (also called stacking) is an ensemble method in machine learning that deploys a metamodel to summarize the predictive results of heterogeneous base models organized into one or more layers. Despite being capable of producing high-performance results, building a stack of models can be a trial-and-error procedure. Thus, our previously developed visual analytics system, entitled StackGenVis, was designed to monitor and control the entire stacking process visually. In this work, we present the results of a comparative user study we performed for evaluating the StackGenVis system. We divided the study participants into two groups to test the usability and effectiveness of StackGenVis compared to Orange Visual Stacking (OVS) in an exploratory usage scenario using healthcare data. The results indicate that StackGenVis is significantly more powerful than OVS based on the qualitative feedback provided by the participants. However, the average completion time for all tasks was comparable between both tools.",
      "show_abstract": false
    },
    "1006": {
      "authors": [
        "Martin Baumann (University of Stuttgart)",
        "Jena Satkunarajan (Universit\u00e4t Stuttgart)",
        "Steffen Koch (University of Stuttgart)",
        "Thomas Ertl (University of Stuttgart)"
      ],
      "Paper ID": 1006,
      "Title": "Hierarchical Multifocus Navigation in Text Annotation Data",
      "type": "Note",
      "Abstract": "We present a new hierarchical multifocus representation- and\ninteraction-technique for the analysis of text annotations. The com-\nparative analysis of annotation data on multiple, distant passages\n(focus regions) of a long source text raises several scalability prob-\nlems. In particular, one soon can be confronted with many nested\nfoci on text ranges with sizes of different orders of magnitude. Our\nsolution suggests to delegate the detailed data representation to other\nviews and to concentrate in the presented overview on the organi-\nzation of the focus regions. The approach consists of three parts: a\ncollection of strips where the annotations are represented in a con-\ndensed form and where sibling- and child-foci are manipulated, a\nmap of the resulting tree of foci for direct access, and a work bench\nthat allows to compare deliberate nodes of the tree on a flat layer.\nWe discuss our approach by comparing it with other state-of-the-art\nmultifocus techniques and describe two use cases that deal with rela-\ntional annotation and with the analysis of annotations on hierarchical\ntext structures respectively.",
      "show_abstract": false
    },
    "1011": {
      "authors": [
        "Teng-Yok Lee (Mitsubishi Electric Corporation)"
      ],
      "Paper ID": 1011,
      "Title": "Visualization for neural-network-based person reidentification",
      "type": "Note",
      "Abstract": "Given images of a person, person re-identification (Person ReID) techniques aim to find images of the same person from previously collected images. Because of large data sets of person images and the advance of deep learning, convolutional neural networks (CNN) successfully boost the accuracy of Person ReID algorithms, but it can be difficult to explain and to troubleshoot issues due to the complexity of CNN. In this paper, we present an visualization-based approach to understand a CNN-based Person ReID algorithm. Given two images, we design an algorithm to estimate how much different elements in a CNN layer contribute to the similarity between their outputs. Based on the contribution estimation, we build a visualization tool to interactively locate and visualize the activation of these elements, other than brute-force examining millions of elements. Our visualization tool also supports various user interaction components to explore a Person ReID data set, locate difficult cases, and analyze the similarity between these difficult cases. We show a use case with our tool to understand and troubleshoot issues in a CNN-based Person ReID algorithm.",
      "show_abstract": false
    },
    "1017": {
      "authors": [
        "Yumiko Sakamoto (University of Manitoba)",
        "Samar Sallam (University of Manitoba)",
        "Aaron Salo (University of Manitoba)",
        "Jason Leboe-McGowan (University of Manitoba)",
        "Pourang Irani (University of Manitoba)"
      ],
      "Paper ID": 1017,
      "Title": "Persuasive Data Storytelling with a Data Video during Covid-19 Infodemic: Affective Pathway to Influence the Users\u2019 Perception about Contact Tracing Apps in less than 6 Minutes",
      "type": "Note",
      "Abstract": "The current pandemic showed us the importance of swiftly disseminating data-based information to the masses of people. This study explores an affect-centered narrative to convey data-driven messages regarding contact tracing apps (CTAs) using video as a medium (i.e., data video). A between-subjects online study compared the effect of three storytelling approaches on viewers\u2019 perception. A video developed by Google was selected as the baseline video (Control Condition; 2min 23s) due to its high quality and relevance to CTAs. The central messages of this baseline video were; a) how CTAs work, and b) how safe and effective CTAs are. Infographics supporting these messages were then added to the baseline video (the second condition; 3min 19s ); this was a simple data video (DV), and it did not intend to induce specific emotional experiences in participants (i.e., cognition-centered video). Finally, an affect-focused DV (AFDV) was also created by emphasizing the emotion-based narrative aspect of the message (the third condition; 4min 6s ). In this video, three cute human-like cartoon characters were introduced. Viewers in this condition needed to process both cognitive and affective information. Note all three videos (i.e., control video, DV, and AFDV) conveyed identical messages. Participants watched one of these three videos only once, and we explored the video effect on their perception. Our results repeatedly indicated the potential\nbenefits of including affect in data storytelling.",
      "show_abstract": false
    },
    "1020": {
      "authors": [
        "Sebeom Park (Seoul National University)",
        "Soohyun Lee (Korea University)",
        "Hyeon Jeon (Seoul National University)",
        "Youngtaek Kim (Samsung Electronics Co., Ltd)",
        "Seokweon Jung (Seoul National University)",
        "Jinwook Bok (Seoul National University)",
        "Jinwook Seo (Seoul National University)"
      ],
      "Paper ID": 1020,
      "Title": "VANT : A Visual Analytics System for Refining Parallel Corpora in Neural Machine Translation",
      "type": "Note",
      "Abstract": "The quality of parallel corpora used to train a Neural Machine Trans\u0002lation (NMT) model can critically influence the model\u2019s performance. Various approaches for refining parallel corpora have been introduced, but there is still much room for improvements, such as\nenhancing the efficiency and the quality of refinement. We introduce VANT, a novel visual analytics system for refining parallel corpora used in training an NMT model. Our system helps users to readily detect and filter noisy parallel corpora by (1) aiding the quality estimation of individual sentence pairs within the corpora by providing diverse quality metrics (e.g., cosine similarity, BLEU, length ratio) and (2) allowing users to visually examine and manage the corpora based on the pre-computed metrics scores. Our system\u2019s effectiveness and usefulness are demonstrated through a qualitative user study with eight participants, including four domain experts with real-world datasets.",
      "show_abstract": false
    },
    "1025": {
      "authors": [
        "Tangyuan Zou (southwest university of science and technology)",
        "song wang (southwest university of science and technology)",
        "Hanglin Li (SouthWest University of Science and Technology)",
        "Yadong Wu (Sichuan University of Science and Engineering)"
      ],
      "Paper ID": 1025,
      "Title": "Hybrid Traffic Route Visualization Recommendation Based on Multilayer Complex Networks",
      "type": "Note",
      "Abstract": "Urban traffic congestion is a major nuisance for residents\u2019 daily commute, but few studies have focused on the effective combination between urban traffic condition visualization and hybrid traffic travel route recommendation. In this paper, the visualization exploration of urban transportation patterns is realized by multilayer complex transportation networks, which are constructed by taxi transportation network, bike-sharing transportation network, and urban transportation community network. Based on multilayer complex traffic networks, a genetic algorithm modified by A* search algorithm is used to generate multi-modal travel routes. The case studies prove that this method can effectively reduce the time cost of commuting between congested areas by generating hybrid traffic routes.",
      "show_abstract": false
    },
    "1028": {
      "authors": [
        "Nathan Danneman (Data Machines Corp)",
        "Robert Gove (Two Six Technologies)"
      ],
      "Paper ID": 1028,
      "Title": "Tuning Automatic Summarization for Incident Report Visualization",
      "type": "Note",
      "Abstract": "We present a machine learning approach to improve the accuracy of summarized incident report visualizations for cyber security. We extend a recent incident report summarization method by training a Bayesian hierarchical model to optimize the summarization algorithm's weights. We also train a flat model and a neural network as alternative models to compare against our hierarchical model. Summaries generated by our hierarchical model achieve higher accuracy than the other methods, with an AUC 0.2 higher than the unweighted method while achieving comparable summarization size. We further demonstrate that visualizations of the hierarchical model's summaries are at least as useful the unweighted method's summaries, and possibly more useful.",
      "show_abstract": false
    },
    "1029": {
      "authors": [
        "Aosheng Cheng (Zhejiang University of Finance and Economics)",
        "Yulong Yin (Zhejiang University of Finance and Economics)",
        "Zhenyu Yan (Zhejiang University of Finance and Economics)",
        "Yuhua Liu (Hangzhou Dianzi University)",
        "Zhiguang Zhou (Zhejiang University of Finance and Economics)"
      ],
      "Paper ID": 1029,
      "Title": "Visual Analytics of Multiple Network Ranking based on Structural Similarity ",
      "type": "Note",
      "Abstract": "Ranking the node importance in complex networks has been widely applied for different purposes, such as web search, resource allocation, and network security. However, existing node ranking methods are almost single network ranking using only one relationship, or aggregate the node ranking scores on multiple networks with equal\nweight, which are insufficient to construct reasonable multiple network rankings, since the association information among multiple networks is largely ignored. Thus, we propose a multiple network visualization framework by fusing multiple networks to obtain credible node ranking scores. After measuring the scores of nodes in each single network by the classic PageRank, a network weight self-adjustment model based on structural similarities between pairwise networks is designed to strengthen the common features of multiple networks or their distinct characteristics. Then, a combined score for each node is computed by a weighted sum of its individual ranking scores on multiple networks. Besides, we provide a set of visualization and interaction interfaces, enabling users to intuitively explore, optimize and compare the multiple network rankings. Case studies on real datasets show that our system is flexible to adapt to different application scenarios, and users can successfully solve multiple network ranking tasks efficiently.",
      "show_abstract": false
    },
    "1016": {
      "authors": [],
      "Paper ID": 1016,
      "Title": "[NO FINAL TITLE PROVIDED. ORIGINAL TITLE: Understanding Cultural Communication through the Visual Portraits of Youtube Channels]",
      "type": "Storytelling",
      "show_abstract": false
    },
    "1019": {
      "authors": [],
      "Paper ID": 1019,
      "Title": "[NO FINAL TITLE PROVIDED. ORIGINAL TITLE: Qu Xing\uff1aEmergency Logistics Constructing a Lifeline in Wuhan]",
      "type": "Storytelling",
      "show_abstract": false
    },
    "1021": {
      "authors": [],
      "Paper ID": 1021,
      "Title": "[NO FINAL TITLE PROVIDED. ORIGINAL TITLE: Polydodo: a Tool for Personal Sleep Stage Analysis and Narrative Visualization]",
      "type": "Storytelling",
      "show_abstract": false
    },
    "1024": {
      "authors": [],
      "Paper ID": 1024,
      "Title": "[NO FINAL TITLE PROVIDED. ORIGINAL TITLE: The Story of Slow Train in China]",
      "type": "Storytelling",
      "show_abstract": false
    }
  },
  "Full Papers": [
    {
      "authors": [
        "Tobias Rapp (Karlsruhe Institute of Technology)",
        "Christoph Peters (Karlsruhe Institute of Technology)",
        "Carsten Dachsbacher (Karlsruhe Institute of Technology)"
      ],
      "Paper ID": 1158,
      "Title": "Image-based Visualization of Large Volumetric Data Using Moments",
      "type": "PPaper",
      "Abstract": "We present a novel image-based representation to interactively visualize large and arbitrarily structured volumetric data. This image-based representation is created from a fixed view and models the scalar densities along each viewing ray. Then, any transfer\nfunction can be applied and changed interactively to visualize the data. In detail, we transform the density in each pixel to the Fourier basis and store Fourier coefficients of a bounded signal, i.e. bounded trigonometric moments. To keep this image-based representation compact, we adaptively determine the number of moments in each pixel and present a novel coding and quantization strategy. Additionally, we perform spatial and temporal interpolation of our image representation and discuss the visualization of introduced uncertainties. Moreover, we use our representation to add single scattering illumination. Lastly, we achieve accurate results even with changes in the view configuration. We evaluate our approach on two large volume datasets and a time-dependent SPH dataset.",
      "show_abstract": false
    },
    {
      "authors": [
        "Jiacheng Yu (Peking University)",
        "Yifan Hu (Yahoo Research)",
        "Xiaoru Yuan (Peking University)"
      ],
      "Paper ID": 2382,
      "Title": "UNICON: A UNIform CONstraint Based Graph Layout Framework",
      "type": "Paper",
      "Abstract": "We propose UNICON, a UNIform CONstraint based graph layout framework that supports both soft and hard constraints. We extend the stress model to accommodate soft constraints by incorporating them in the objective functions, optimized by stochastic gradient descent. For hard constraints, such as inequalities or equalities in the layout space, we utilize a gradient projection method to satisfy them. A visualization prototype system is implemented based on this framework for the user to interactively add or remove constraints to generate the desired layouts. We demonstrate the efficiency, quality, and flexibility of the framework and the system on a number of datasets with a wide range of user-defined constraints.",
      "show_abstract": false
    },
    {
      "authors": [
        "Alexander Vieth (Delft University of Technology )",
        "Anna Vilanova (Eindhoven University of Technology)",
        "Boudewijn Lelieveldt (Leiden University Medical Center)",
        "Elmar Eisemann (Delft University of Technology)",
        "Thomas H\u00f6llt (TU Delft)"
      ],
      "Paper ID": 4701,
      "Title": "Incorporating Texture Information into Dimensionality Reduction for High-Dimensional Images",
      "type": "Paper",
      "Abstract": "High-dimensional imaging is becoming increasingly relevant in many fields from astronomy and cultural heritage to systems biology.\nVisual exploration of such high-dimensional data is commonly facilitated by dimensionality reduction.\nHowever, common dimensionality reduction methods do not include spatial information present in images, such as local texture features, into the construction of low-dimensional embeddings.\nConsequently, exploration of such data is typically split into a step focusing on the attribute space followed by a step focusing on spatial information, or vice versa.\nIn this paper, we present a method for incorporating spatial neighborhood information into distance-based dimensionality reduction methods, such as t-Distributed Stochastic Neighbor Embedding (t-SNE).\nWe achieve this by modifying the distance measure between high-dimensional attribute vectors associated with each pixel such that it takes the pixel's spatial neighborhood into account.\nBased on a classification of different methods for comparing image patches, we explore a number of different approaches.\nWe compare these approaches from a theoretical and experimental point of view. \nFinally, we illustrate the value of the proposed methods by qualitative and quantitative evaluation on synthetic data and two real-world use cases.",
      "show_abstract": false
    },
    {
      "authors": [
        "Pengfei Gu (University of Notre Dame)",
        "Jun Han (University of Notre Dame)",
        "Danny Chen (University of Notre Dame)",
        "Chaoli Wang (University of Notre Dame)"
      ],
      "Paper ID": 4981,
      "Title": "Scalar2Vec: Translating Scalar Fields to Vector Fields via Deep Learning",
      "type": "Paper",
      "Abstract": "We introduce Scalar2Vec, a new deep learning solution that translates scalar fields to velocity vector fields for scientific visualization. Given multivariate or ensemble scalar field volumes and their velocity vector field counterparts, Scalar2Vec first identifies suitable variables for scalar-to-vector translation. It then leverages a k-complete bipartite translation network (kCBT-Net) to complete the translation task. kCBT-Net takes a set of sampled scalar volumes of the same variable as input, extracts their multi-scale information, and learns to synthesize the corresponding vector volumes. Ground-truth vector fields and their derived quantities are utilized for loss computation and network training. After training, Scalar2Vec can infer unseen velocity vector fields of the same data set directly from their scalar field counterparts. We demonstrate the effectiveness of Scalar2Vec with quantitative and qualitative results on multiple data sets and compare it with three other state-of-the-art deep learning methods.",
      "show_abstract": false
    },
    {
      "authors": [
        "Harsh Bhatia (Lawrence Livermore National Laboratory)",
        "Duong Hoang (University of Utah)",
        "Nate Morrical (University of Utah)",
        "Valerio Pascucci (University of Utah)",
        "Peer-Timo Bremer (Lawrence Livermore National Laboratory)",
        "Peter Lindstrom (Lawrence Livermore National Laboratory)"
      ],
      "Paper ID": 5060,
      "Title": "AMM: Adaptive Multilinear Meshes",
      "type": "PPaper",
      "Abstract": "Adaptive representations are increasingly indispensable for reducing the in-memory and on-disk footprints of large-scale data. Usual solutions are designed broadly along two themes: reducing data precision, e.g., through compression, or adapting data resolution, e.g., using spatial hierarchies. Recent research suggests that combining the two approaches, i.e., adapting both resolution and precision simultaneously, can offer significant gains over using them individually. However, there currently exist no practical solutions to creating and evaluating such representations at scale. In this work, we present a new resolution-precision-adaptive representation to support hybrid data reduction schemes and offer an interface to existing tools and algorithms. Through novelties in spatial hierarchy, our representation, Adaptive Multilinear Meshes (AMM), provides considerable reduction in the mesh size. AMM creates a piecewise multilinear representation of uniformly sampled scalar data and can selectively relax or enforce constraints on conformity, continuity, and coverage, delivering a flexible adaptive representation. AMM also supports representing the function using mixed-precision values to further the achievable gains in data reduction. We describe a practical approach to creating AMM incrementally using arbitrary orderings of data and demonstrate AMM on six types of resolution and precision datastreams. By interfacing with state-of-the-art rendering tools through VTK, we demonstrate the practical and computational advantages of our representation for visualization techniques. With an open-source release of our tool to create AMM, we make such evaluation of data reduction accessible to the community, which we hope will foster new opportunities and future data reduction schemes",
      "show_abstract": false
    },
    {
      "authors": [
        "Neng Shi (The Ohio State University)",
        "Jiayi Xu (The Ohio State University)",
        "Skylar Wurster (The Ohio State University)",
        "Hanqi Guo (Argonne National Laboratory)",
        "Jonathan Woodring (Los Alamos National Laboratory)",
        "Luke Van Roekel (Los Alamos National Laboratory)",
        "Han-Wei Shen (The Ohio State University)"
      ],
      "Paper ID": 5304,
      "Title": "GNN-Surrogate: A Hierarchical and Adaptive Graph Neural Network for Parameter Space Exploration of Unstructured-Mesh Ocean Simulations",
      "type": "PPaper",
      "Abstract": "We propose GNN-Surrogate, a graph neural network-based surrogate model to explore the parameter space of ocean climate simulations. Parameter space exploration is important for domain scientists to understand the influence of input parameters (e.g., wind stress) on the simulation output (e.g., temperature). The exploration requires scientists to exhaust the complicated parameter space by running a batch of computationally expensive simulations. Our approach improves the efficiency of parameter space exploration with a surrogate model that predicts the simulation outputs accurately and efficiently. Specifically, GNN-Surrogate predicts the output field with given simulation parameters so scientists can explore the simulation parameter space with visualizations from user-specified visual mappings. Moreover, our graph-based techniques are designed for unstructured meshes, making the exploration of simulation outputs on irregular grids efficient. For efficient training, we generate hierarchical graphs and use adaptive resolutions. We give quantitative and qualitative evaluations on the MPAS-Ocean simulation to demonstrate the effectiveness and efficiency of GNN-Surrogate. Source code is publicly available at \\url{https://github.com/trainsn/GNN-Surrogate}.",
      "show_abstract": false
    },
    {
      "authors": [
        "Sanjana Srabanti (University of Illinois at Chicago)",
        "Michael Tran (University of Illinois at Chicago)",
        "Virginie Achim (University of Illinois at Chicago)",
        "Clifton David Fuller (University of Texas)",
        "Guadalupe Canahuate (University of Iowa)",
        "Fabio Miranda (University of Illinois at Chicago)",
        "G. Elisabeta Marai (University of Illinois at Chicago)"
      ],
      "Paper ID": 5686,
      "Title": "A Tale of Two Centers: Visual Exploration of Health Disparities in Cancer Care",
      "type": "Paper",
      "Abstract": "The annual incidence of head and neck cancers (HNC) worldwide is more than 550,000 cases, with around 300,000 deaths each year. However, the incidence rates and disease-characteristics of HNC differ between treatment centers and different populations, due to undetermined reasons, which may or not include socioeconomic factors. The multi-faceted and multi-variate nature of the data in the context of the emerging field of health disparities research makes automated analysis impractical. Hence, we present a visual analysis approach to explore the health disparities in the data of Head and Neck cancer patients from two different cohorts at two cancer care centers. Our approach integrates data from multiple sources, including census data and city data, with custom visual encodings and with a nearest neighbor approach. Our design, created in collaboration with oncology experts, makes it possible to analyze the patients\u2019 demographic, disease characteristics, treatments and outcomes, and to make significant comparisons of these two cohorts and of individual patients. We evaluate this approach through two case studies performed with domain experts. The results demonstrate that this visual analysis approach successfully accomplishes the goal of comparing two cohorts in terms of different significant factors, and can provide insights into the main source of health disparities between the two centers.",
      "show_abstract": false
    },
    {
      "authors": [
        "Aditi Mishra (Arizona State University)",
        "Utkarsh Soni (Arizona State University)",
        "Jinbin Huang (Arizona state university)",
        "Chris Bryan (Arizona State University)"
      ],
      "Paper ID": 5799,
      "Title": "Why? Why not? When? Visual Explanations of Agent Behavior in Reinforcement Learning",
      "type": "Paper",
      "Abstract": "Reinforcement learning (RL) is used in many domains, including autonomous driving, robotics, stock trading, and video games. Unfortunately, the black box nature of RL agents, combined with legal and ethical considerations, makes it increasingly important that humans (including those are who not experts in RL) understand the reasoning behind the actions taken by an RL agent, particularly in safety-critical domains. To help address this challenge, we introduce PolicyExplainer, a visual analytics interface which lets the user directly query an autonomous agent. PolicyExplainer visualizes the states, policy, and expected future rewards for an agent, and supports asking and answering questions such as: 'Why take this action? Why not take this other action? When is this action taken?'' PolicyExplainer is designed based upon a domain analysis with RL researchers, and is evaluated via qualitative and quantitative assessments on a trio of domains: taxi navigation, a stack bot domain, and drug recommendation for HIV patients.\nWe find that PolicyExplainer's visual approach promotes trust and understanding of agent decisions better than a state-of-the-art text-based explanation approach. Interviews with domain practitioners provide further validation for PolicyExplainer as applied to safety-critical domains. Our results help demonstrate how visualization-based approaches can be leveraged to decode the behavior of autonomous RL agents, particularly for RL non-experts.",
      "show_abstract": false
    },
    {
      "authors": [
        "Seok-Hee Hong (University of Sydney)",
        "Amyra Meidiana (University of Sydney)",
        "James George Wood (University of Sydney)",
        "Juan Pablo Bonilla Ataides (University of Sydney)",
        "Peter Eades (University of Sydney)",
        "Kunsoo Park (Seoul National University)"
      ],
      "Paper ID": 6148,
      "Title": "dGG, dRNG, DSC: New Shape-based Faithfulness Metrics for  Large and Complex Graph Visualization",
      "type": "Paper",
      "Abstract": "Shape-based metrics measure how faithfully a drawing D of a large graph G shows the structure of graph, by comparing the similarity between G and a proximity graph P computed from D. Although these metrics can successfully evaluate drawings of large graphs, they are limited to relatively sparse graphs, since existing metrics use planar proximity graphs GG (Gabriel Graph) and RNG (Relative Neighbourhood Graph).\n\nThis paper presents new shape-based faithfulness metrics for evaluating drawings of large and complex graphs, using high-order proximity graphs k-GG and k-RNG. Extensive experiments demonstrate that our new shape-based metrics using degree-based proximity graphs dGG and dRNG can more accurately measure the faithfulness\nof drawings of large and complex graphs, with a significant improvement of over 100% better, on average, than the existing shape-based metrics using GG and RNG.\n\nMoreover, we present a new shape change faithfulness metric DSC for evaluating drawings of dynamic graphs, by measuring how proportional the geometric shape change in the drawings of dynamic graphs is to the ground truth change in dynamic graphs. Validation using deformation experiments support that DSC can accurately\nmeasure shape change faithfulness in dynamic graph drawing.\n\nFurthermore, we present extensive comparison experiments of ten popular graph layouts using our new shape-based metrics dGG, dRNG and DSC, to recommend which layouts can give a better shape-faithful graph drawing for large and complex graphs.",
      "show_abstract": false
    },
    {
      "authors": [
        "Shilpika Shilpika (University of California, Davis)",
        "Takanori Fujiwara (University of California, Davis)",
        "Naohisa Sakamoto (Kobe University)",
        "Jorji Nonaka (RIKEN Center for Computational Science)",
        "Kwan-Liu Ma (University of California at Davis)"
      ],
      "Paper ID": 6250,
      "Title": "A Visual Analytics Approach for Hardware System Monitoring with Streaming Functional Data Analysis",
      "type": "PPaper",
      "Abstract": "Many real-world applications involve analyzing time-dependent phenomena, which are intrinsically functional, consisting of curves varying over a continuum (e.g., time). When analyzing continuous data, functional data analysis (FDA) provides substantial\nbenefits, such as the ability to study the derivatives and to restrict the ordering of data. However, continuous data inherently has infinite dimensions, and for a long time series, FDA methods often suffer from high computational costs. The analysis problem becomes even more challenging when we must update the FDA results for continuously arriving data. In this paper, we present a visual analytics approach for monitoring and reviewing time series data streamed from a hardware system with a focus on identifying outliers by using FDA. To perform FDA while addressing the computational problem, we introduce new incremental and progressive algorithms that promptly generate the magnitude-shape (MS) plot, which conveys both the functional magnitude and shape outlyingness of time series data. In addition, by using an MS plot in conjunction with an FDA version of principal component analysis, we enhance the analyst\u2019s ability to investigate the visually-identified outliers. We illustrate the effectiveness of our approach with two use scenarios using real-world datasets. The resulting tool is evaluated by industry experts using real-world streaming datasets.",
      "show_abstract": false
    },
    {
      "authors": [
        "Dana EL-Rushaidat (Purdue University)",
        "Raine Yeh (Google)",
        "Xavier Tricoche (Purdue University )"
      ],
      "Paper ID": 6863,
      "Title": "Boundary-Aware Rectilinear Grid: Accurate Approximation of Unstructured Dataset into Rectilinear Grid with Solid Boundary Handling Capabilities",
      "type": "Paper",
      "Abstract": "Computational fluid dynamics simulations produce increasingly large datasets that are often defined over unstructured grids with solid boundaries. Though unstructured grids allow for the flexible representation of this geometry and the refinement of the grid resolution, they suffer from high storage cost, non-trivial spatial queries, and low reconstruction smoothness. On the other hand, rectilinear grids do not have these drawbacks, but they cannot represent complex boundaries.\nWe present in this paper a technique for the high-quality approximation of large unstructured datasets with solid boundaries onto modified rectilinear grids that we endow with boundary handling capabilities. The resulting data representation can accommodate challenging boundaries while supporting high-order reconstruction kernels with a much-reduced memory footprint. As such, our data representation enjoys all the benefits of conventional rectilinear grids while addressing their fundamental geometric limitations. We demonstrate the proposed approach on several CFD datasets and show that our method achieves an accurate and high-quality approximation of simulation datasets.",
      "show_abstract": false
    },
    {
      "authors": [
        "Pavol Klacansky (University of Utah)",
        "Attila Gyulassy (University of Utah)",
        "Peer-Timo Bremer (Lawrence Livermore National Laboratory)",
        "Valerio Pascucci (University of Utah)"
      ],
      "Paper ID": 7044,
      "Title": "A Study of the Locality of Persistence-Based Queries and Its Implications on Efficiency of Localized Data Structures",
      "type": "Paper",
      "Abstract": "Scientific datasets are often analyzed and visualized using isosurfaces. The connected components at or above the isovalue defining these isosurfaces are called superlevel-set components. The vertex set of these superlevel-set components can be used to compute local statistics, such as mean temperature or histogram per component, or to segment the data. However, in datasets produced by acquisition devices or simulations noise induces many spurious components which clutter the visualization and analysis results. Many of these spurious components would disappear if the data values were slightly adjusted. The notion of persistence captures the stability of a component with respect to function value changes, and so we are interested in computing persistence quickly. Locality of computation is critical for parallel scalability, minimization of communication in a distributed environment, or an out-of-core processing. The recently introduced merge forest attained high performance by exploiting locality, thereby avoiding communication until needed to resolve a feature query. We extend the merge forest to support persistence-based queries and study the locality of these queries by evaluating the traversals of regions of data during a query. We confirm that the majority of evaluated datasets have the property that the noise is mostly local, and thus can be efficiently eliminated without performing a global analysis. Finally, we compare the query running times with those of a triplet merge tree, because a triplet merge tree answers all proposed queries in constant time and can be constructed from a merge tree in linear time.",
      "show_abstract": false
    },
    {
      "authors": [
        "Aditi Mishra (Arizona State University)",
        "Shashank Ginjpalli (Arizona State University)",
        "Chris Bryan (Arizona State University)"
      ],
      "Paper ID": 7244,
      "Title": "News Kaleidoscope: Visual Investigation of Coverage Diversity inNews Event Reporting",
      "type": "Paper",
      "Abstract": "When a newsworthy event occurs, media articles that report on and about the event can vary widely in different ways---a concept known as coverage diversity. To help investigate coverage diversity in event reporting, we develop a visual analytics system called NewsKaleidoscope. NewsKaleidoscope combines several backend language processing techniques with a coordinated visualization interface. Notably, NewsKaleidoscope is tailored for visualization non-experts, and adopts an analytic workflow based around subselection analysis, whereby second-level features of articles are extracted to provide a more detailed and nuanced analysis of coverage diversity.\nTo robustly evaluate NewsKaleidoscope, we conduct a trio of user studies. (1) A study with news experts assesses the insights promoted for our targeted journalism-savvy users. (2) A follow-up study with news novices assesses the overall system and the specific insights promoted for journalism-agnostic users. (3) Based on identified system limitations in these two studies, we amend NewsKaleidoscope\u2019s design and conduct a third study to validate these improvements. Results indicate that, for both news novice and experts, NewsKaleidoscope supports an effective, task-driven workflow for analyzing the diversity of news coverage about events, though journalism expertise has a significant influence on the user\u2019s insights and takeaways. Our insights developing and evaluating NewsKaleidoscope can aid future tools that combine visualization with natural language processing to analyze coverage diversity in news event reporting.",
      "show_abstract": false
    },
    {
      "authors": [
        "Shivam Agarwal (University of Duisburg-Essen)",
        "G\u00fcnter Wallner (Johannes Kepler University Linz)",
        "Jeremy Watson (AI Crowd)",
        "Fabian Beck (University of Duisburg-Essen)"
      ],
      "Paper ID": 7366,
      "Title": "Spatio-temporal Analysis of Multi-agent Scheduling Behaviors on Fixed-track Networks",
      "type": "Paper",
      "Abstract": "Multi-agent systems require coordination among the agents to solve a given task. For movement on fixed-track networks, traditional scheduling algorithms have dominated so far, but the interest in autonomous and intelligent agents is growing as they promise to react to unexpected and exceptional situations more robustly. In this paper, we study data from the Flatland 2020 NeurIPS Competition, where trains move through a virtual rail network. We developed a timeline-based visualization that provides an overview of all train movements in a simulated episode, clearly hinting at different phases, non-optimal routes, and issues such as deadlocks. This view is complemented with a map view and a graph view, interactively linked through highlighting and synchronous animation. Defining regions of interest in the map builds an analysis graph for detailed inspection. A comparison mode allows contrasting two different episodes regarding the same rail network across all views. We have conducted this application study in close collaboration with the Flatland community. Identified analysis goals stem from interviews with key persons of the community, while the approach itself was developed in two iterations based on feedback from experts with diverse backgrounds. This feedback, together with an analysis of the winning submissions from the competition, confirms that the initial analysis goals can be answered.",
      "show_abstract": false
    },
    {
      "authors": [
        "Shisong Wang (University of Saskatchewan)",
        "Debajyoti Mondal (University of Saskatchewan)",
        "Sara Sadri (University of Saskatchewan)",
        "Chanchal K. Roy (University of Saskatchewan)",
        "Jay Famiglietti (Global Institute of Water Security)",
        "Kevin A. Schneider (University of Saskatchewan)"
      ],
      "Paper ID": 7610,
      "Title": "SET-STAT-MAP: Extending Parallel Sets for Visualizing Mixed Data",
      "type": "Paper",
      "Abstract": "Multi-attribute dataset visualizations are often designed based on attribute types, i.e., whether the attributes are categorical or numerical.  Parallel Sets and Parallel Coordinates are two well-known techniques to visualize categorical and numerical data, respectively. A common strategy to visualize mixed data is to use multiple information linked view, e.g., Parallel Coordinates are often augmented with maps to explore spatial data with numeric attributes. In this paper, we design visualizations for mixed data, where the dataset may include numerical, categorical, and spatial attributes. The proposed solution Set-Stat-Map is a harmonious combination of three interactive components: Parallel Sets (visualizes sets determined by the combination of categories or numeric ranges), statistics columns (visualizes numerical summaries of the sets), and a geospatial map view (visualizes the spatial information). We augment these components with colors and textures to enhance users' capability of analyzing distributions of pairs of attribute combinations. To improve scalability, we merge the sets to limit the number of possible combinations to be rendered on the display. We demonstrate the use of Set-Stat-Map using two different types of datasets: a meteorological dataset and an online vacation rental dataset (Airbnb). To examine the potential of the system, we collaborated with the meteorologists, which revealed both challenges and opportunities for Set-Stat-Map to be used for real-life visual analytics.",
      "show_abstract": false
    },
    {
      "authors": [
        "Jacob Miller (University of Arizona)",
        "Stephen Kobourov (University of Arizona)",
        "Vahan Huroyan (University of Arizona)"
      ],
      "Paper ID": 8231,
      "Title": "Browser-based Hyperbolic Visualization of Graphs",
      "type": "Paper",
      "Abstract": "Hyperbolic geometry offers a natural \u2018focus+context\u2019 for data visualization and has been shown to underlie real-world complex networks. However, current hyperbolic network visualization approaches are limited to special types of networks and do not scale to large datasets. With this in mind, we designed, implemented, and analyzed three methods for hyperbolic visualization of networks in the browser based on inverse projections, generalized force-directed algorithms, and hyperbolic multi-dimensional scaling (H-MDS). A comparison with Euclidean MDS shows that H-MDS produces embeddings with lower distortion for several types of networks. All three methods can handle node-link and node-link-group representations and are available in a fully functional web-based system.",
      "show_abstract": false
    },
    {
      "authors": [
        "Yun-Hsin Kuo (University of California, Davis)",
        "Takanori Fujiwara (University of California, Davis)",
        "Charles C.-K. Chou (Academia Sinica)",
        "Chun-houh Chen (Academia Sinica)",
        "Kwan-Liu Ma (University of California, Davis)"
      ],
      "Paper ID": 8250,
      "Title": "A Machine-Learning-Aided Visual Analysis Workflow for Investigating Air Pollution Data",
      "type": "Paper",
      "Abstract": "Analyzing air pollution data is challenging as there are various analysis focuses from different aspects: feature (what), space (where), and time (when). As in most geospatial analysis problems, besides high-dimensional features, the temporal and spatial dependencies of air pollution induce the complexity of performing analysis. Machine learning methods, such as dimensionality reduction, can extract and summarize important information of the data to lift the burden of understanding such a complicated environment. In this paper, we present a methodology that utilizes multiple machine learning methods to uniformly explore these aspects. With this methodology, we develop a visual analytic system that supports a flexible analysis workflow, allowing domain experts to freely explore different aspects based on their analysis needs. We demonstrate the capability of our system and analysis workflow supporting a variety of analysis tasks with multiple use cases.",
      "show_abstract": false
    },
    {
      "authors": [
        "Pavol Klacansky (University of Utah)",
        "Haichao Miao (Lawrence Livermore National Laboratory)",
        "Attila Gyulassy (University of Utah)",
        "Andrew Townsend (LLNL)",
        "Kyle Champley (LLNL)",
        "Joe Tringe (LLNL)",
        "Valerio Pascucci (University of Utah)",
        "Peer-Timo Bremer (Lawrence Livermore National Laboratory)"
      ],
      "Paper ID": 8469,
      "Title": "Virtual Inspection of Additively Manufactured Parts",
      "type": "Paper",
      "Abstract": "Advanced manufacturing techniques, such as additive manufacturing, enable the design of increasingly complex components for a wide range of industrial applications.\nHowever, this complexity makes qualification of the parts, determining whether a part is within some margin of error from the initial design, difficult.\nTo inspect and qualify complex internal geometries that are not accessible with an external probe, parts are typically scanned with computed tomography (CT), and manually compared to the computer-aided design (CAD) model using visual inspections.\nMatching the CAD model to the 3D reconstructed object is challenging in a traditional desktop environment due to the lack of depth perception and 3D interaction.\nAn additional challenge comes from the geometric complexity of CAD meshes and large-scale CT scans.\nWe present a virtual reality (VR) system for manual qualification, providing a novel defect visualization method. First, we describe a semiautomatic CAD-to-scan Registration approach in VR using a finite element mesh.\nSecond, we introduce the Defect Box, which enables full-resolution inspection for massive scans and CAD-CT comparison of local defect regions.\nFinally, our system includes intuitive 3D Metrology methods that enable natural interactions for the measurement of features and defects in VR.\nWe demonstrate our approach on both real and synthetic data and discuss feedback from four expert users in nondestructive qualification.",
      "show_abstract": false
    },
    {
      "authors": [
        "Chengbo Zheng (Hong Kong University of Science and Technology)",
        "Xiaojuan Ma (Hong Kong University of Science and Technology)"
      ],
      "Paper ID": 8813,
      "Title": "Evaluating the Effect of Enhanced Text-Visualization Integration on Combating Misinformation in Data Story",
      "type": "Paper",
      "Abstract": "Misinformation has disruptive effects on our lives. Many researchers have looked into means to identify and combat misinformation in text or data visualization. However, there is still a lack of understanding of how misinformation can be introduced when text and visualization are combined to tell data stories, not to mention how to improve the lay public\u2019s awareness of possible misperceptions about facts in narrative visualization. In this paper, we \ufb01rst analyze where misinformation could possibly be injected into the productionconsumption process of data stories through a literature survey. Then, as a \ufb01rst step towards combating misinformation in data stories, we explore possible defensive design methods to enhance the reader\u2019s awareness of information misalignment when data facts are scripted and visualized. More speci\ufb01cally, we conduct a between-subjects crowdsourcing study to investigate the impact of two design methods enhancing text-visualization integration, i.e., explanatory annotation and interactive linking, on users\u2019 awareness of misinformation in data stories. The study results show that although most participants still can not \ufb01nd misinformation, the two design methods can significantly lower the perceived credibility of the text or visualizations. Our work informs the possibility of \ufb01ghting an infodemic through defensive design methods.",
      "show_abstract": false
    },
    {
      "authors": [
        "Xiwei Xuan (University of California, Davis)",
        "Xiaoyu Zhang (University of California, Davis)",
        "Oh-Hyun Kwon (University of California, Davis)",
        "Kwan-Liu Ma (University of California at Davis)"
      ],
      "Paper ID": 8907,
      "Title": "VAC-CNN: A Visual Analytics System for Comparative Studies of Deep Convolutional Neural Networks",
      "type": "PPaper",
      "Abstract": "The rapid development of Convolutional Neural Networks (CNNs) in recent years has triggered significant breakthroughs in many machine learning (ML) applications. The ability to understand and compare various CNN models available is thus essential. The conventional approach with visualizing each model's quantitative features, such as classification accuracy and computational complexity, is not sufficient for a deeper understanding and comparison of the behaviors of different models. Moreover, most of the existing tools for assessing CNN behaviors only support comparison between two models and lack the flexibility of customizing the analysis tasks according to user needs. This paper presents a visual analytics system, VAC-CNN (Visual Analytics for Comparing CNNs), that supports the in-depth inspection of a single CNN model as well as comparative studies of two or more models. The ability to compare a larger number of (e.g., tens of) models especially distinguishes our system from previous ones. With a carefully designed model visualization and explaining support, VAC-CNN facilitates a highly interactive workflow that promptly presents both quantitative and qualitative information at each analysis stage. We demonstrate VAC-CNN's effectiveness for assisting novice ML practitioners in evaluating and comparing multiple CNN models through two use cases and one preliminary evaluation study using the image classification tasks on the ImageNet dataset.",
      "show_abstract": false
    },
    {
      "authors": [
        "Dominik Vietinghoff (Leipzig University)",
        "Michael B\u00f6ttinger (German Climate Computing Center (DKRZ))",
        "Gerik Scheuermann (Leipzig University)",
        "Christian Heine (Leipzig University)"
      ],
      "Paper ID": 9879,
      "Title": "Detecting Critical Points in 2D Scalar Field Ensembles Using Bayesian Inference",
      "type": "Paper",
      "Abstract": "In an era of quickly growing data set sizes, information reduction methods such as extracting or highlighting characteristic features become more and more important for data analysis. For single scalar fields, topological methods can fill this role by extracting and relating critical points. While such methods are regularly employed to study single scalar fields, it is less well studied how they can be extended to uncertain data, as produced, e.g., by ensemble simulations.\n\nMotivated by our previous work on visualization in climate research, we study new methods to characterize critical points in ensembles of 2D scalar fields. Previous work on this topic either assumed or required specific distributions, did not account for uncertainty introduced by approximating the underlying latent distributions by a finite number of fields, or did not allow to answer all our domain experts' questions. In this work, we use Bayesian inference to estimate the probability of critical points, either of the original ensemble or its bootstrapped mean. This does not make any assumptions on the underlying distribution and allows to estimate the sensitivity of the results to finite-sample approximations of the underlying distribution. We use color mapping to depict these probabilities and the stability of their estimation. The resulting images can, e.g., be used to estimate how precise the critical points of the mean-field are. We apply our method to synthetic data to validate its theoretical properties and compare it with other methods in this regard. We also apply our method to the data from our previous work, where it provides a more accurate answer to the domain experts' research questions.",
      "show_abstract": false
    }
  ],
  "Visualization Notes": [
    {
      "authors": [
        "Angelos Chatzimparmpas (Linnaeus University)",
        "Vilhelm Park (Linnaeus University)",
        "Andreas Kerren (Linnaeus University)"
      ],
      "Paper ID": 1000,
      "Title": "Evaluating StackGenVis with a Comparative User Study",
      "type": "Note",
      "Abstract": "Stacked generalization (also called stacking) is an ensemble method in machine learning that deploys a metamodel to summarize the predictive results of heterogeneous base models organized into one or more layers. Despite being capable of producing high-performance results, building a stack of models can be a trial-and-error procedure. Thus, our previously developed visual analytics system, entitled StackGenVis, was designed to monitor and control the entire stacking process visually. In this work, we present the results of a comparative user study we performed for evaluating the StackGenVis system. We divided the study participants into two groups to test the usability and effectiveness of StackGenVis compared to Orange Visual Stacking (OVS) in an exploratory usage scenario using healthcare data. The results indicate that StackGenVis is significantly more powerful than OVS based on the qualitative feedback provided by the participants. However, the average completion time for all tasks was comparable between both tools.",
      "show_abstract": false
    },
    {
      "authors": [
        "Martin Baumann (University of Stuttgart)",
        "Jena Satkunarajan (Universit\u00e4t Stuttgart)",
        "Steffen Koch (University of Stuttgart)",
        "Thomas Ertl (University of Stuttgart)"
      ],
      "Paper ID": 1006,
      "Title": "Hierarchical Multifocus Navigation in Text Annotation Data",
      "type": "Note",
      "Abstract": "We present a new hierarchical multifocus representation- and\ninteraction-technique for the analysis of text annotations. The com-\nparative analysis of annotation data on multiple, distant passages\n(focus regions) of a long source text raises several scalability prob-\nlems. In particular, one soon can be confronted with many nested\nfoci on text ranges with sizes of different orders of magnitude. Our\nsolution suggests to delegate the detailed data representation to other\nviews and to concentrate in the presented overview on the organi-\nzation of the focus regions. The approach consists of three parts: a\ncollection of strips where the annotations are represented in a con-\ndensed form and where sibling- and child-foci are manipulated, a\nmap of the resulting tree of foci for direct access, and a work bench\nthat allows to compare deliberate nodes of the tree on a flat layer.\nWe discuss our approach by comparing it with other state-of-the-art\nmultifocus techniques and describe two use cases that deal with rela-\ntional annotation and with the analysis of annotations on hierarchical\ntext structures respectively.",
      "show_abstract": false
    },
    {
      "authors": [
        "Teng-Yok Lee (Mitsubishi Electric Corporation)"
      ],
      "Paper ID": 1011,
      "Title": "Visualization for neural-network-based person reidentification",
      "type": "Note",
      "Abstract": "Given images of a person, person re-identification (Person ReID) techniques aim to find images of the same person from previously collected images. Because of large data sets of person images and the advance of deep learning, convolutional neural networks (CNN) successfully boost the accuracy of Person ReID algorithms, but it can be difficult to explain and to troubleshoot issues due to the complexity of CNN. In this paper, we present an visualization-based approach to understand a CNN-based Person ReID algorithm. Given two images, we design an algorithm to estimate how much different elements in a CNN layer contribute to the similarity between their outputs. Based on the contribution estimation, we build a visualization tool to interactively locate and visualize the activation of these elements, other than brute-force examining millions of elements. Our visualization tool also supports various user interaction components to explore a Person ReID data set, locate difficult cases, and analyze the similarity between these difficult cases. We show a use case with our tool to understand and troubleshoot issues in a CNN-based Person ReID algorithm.",
      "show_abstract": false
    },
    {
      "authors": [
        "Yumiko Sakamoto (University of Manitoba)",
        "Samar Sallam (University of Manitoba)",
        "Aaron Salo (University of Manitoba)",
        "Jason Leboe-McGowan (University of Manitoba)",
        "Pourang Irani (University of Manitoba)"
      ],
      "Paper ID": 1017,
      "Title": "Persuasive Data Storytelling with a Data Video during Covid-19 Infodemic: Affective Pathway to Influence the Users\u2019 Perception about Contact Tracing Apps in less than 6 Minutes",
      "type": "Note",
      "Abstract": "The current pandemic showed us the importance of swiftly disseminating data-based information to the masses of people. This study explores an affect-centered narrative to convey data-driven messages regarding contact tracing apps (CTAs) using video as a medium (i.e., data video). A between-subjects online study compared the effect of three storytelling approaches on viewers\u2019 perception. A video developed by Google was selected as the baseline video (Control Condition; 2min 23s) due to its high quality and relevance to CTAs. The central messages of this baseline video were; a) how CTAs work, and b) how safe and effective CTAs are. Infographics supporting these messages were then added to the baseline video (the second condition; 3min 19s ); this was a simple data video (DV), and it did not intend to induce specific emotional experiences in participants (i.e., cognition-centered video). Finally, an affect-focused DV (AFDV) was also created by emphasizing the emotion-based narrative aspect of the message (the third condition; 4min 6s ). In this video, three cute human-like cartoon characters were introduced. Viewers in this condition needed to process both cognitive and affective information. Note all three videos (i.e., control video, DV, and AFDV) conveyed identical messages. Participants watched one of these three videos only once, and we explored the video effect on their perception. Our results repeatedly indicated the potential\nbenefits of including affect in data storytelling.",
      "show_abstract": false
    },
    {
      "authors": [
        "Sebeom Park (Seoul National University)",
        "Soohyun Lee (Korea University)",
        "Hyeon Jeon (Seoul National University)",
        "Youngtaek Kim (Samsung Electronics Co., Ltd)",
        "Seokweon Jung (Seoul National University)",
        "Jinwook Bok (Seoul National University)",
        "Jinwook Seo (Seoul National University)"
      ],
      "Paper ID": 1020,
      "Title": "VANT : A Visual Analytics System for Refining Parallel Corpora in Neural Machine Translation",
      "type": "Note",
      "Abstract": "The quality of parallel corpora used to train a Neural Machine Trans\u0002lation (NMT) model can critically influence the model\u2019s performance. Various approaches for refining parallel corpora have been introduced, but there is still much room for improvements, such as\nenhancing the efficiency and the quality of refinement. We introduce VANT, a novel visual analytics system for refining parallel corpora used in training an NMT model. Our system helps users to readily detect and filter noisy parallel corpora by (1) aiding the quality estimation of individual sentence pairs within the corpora by providing diverse quality metrics (e.g., cosine similarity, BLEU, length ratio) and (2) allowing users to visually examine and manage the corpora based on the pre-computed metrics scores. Our system\u2019s effectiveness and usefulness are demonstrated through a qualitative user study with eight participants, including four domain experts with real-world datasets.",
      "show_abstract": false
    },
    {
      "authors": [
        "Tangyuan Zou (southwest university of science and technology)",
        "song wang (southwest university of science and technology)",
        "Hanglin Li (SouthWest University of Science and Technology)",
        "Yadong Wu (Sichuan University of Science and Engineering)"
      ],
      "Paper ID": 1025,
      "Title": "Hybrid Traffic Route Visualization Recommendation Based on Multilayer Complex Networks",
      "type": "Note",
      "Abstract": "Urban traffic congestion is a major nuisance for residents\u2019 daily commute, but few studies have focused on the effective combination between urban traffic condition visualization and hybrid traffic travel route recommendation. In this paper, the visualization exploration of urban transportation patterns is realized by multilayer complex transportation networks, which are constructed by taxi transportation network, bike-sharing transportation network, and urban transportation community network. Based on multilayer complex traffic networks, a genetic algorithm modified by A* search algorithm is used to generate multi-modal travel routes. The case studies prove that this method can effectively reduce the time cost of commuting between congested areas by generating hybrid traffic routes.",
      "show_abstract": false
    },
    {
      "authors": [
        "Nathan Danneman (Data Machines Corp)",
        "Robert Gove (Two Six Technologies)"
      ],
      "Paper ID": 1028,
      "Title": "Tuning Automatic Summarization for Incident Report Visualization",
      "type": "Note",
      "Abstract": "We present a machine learning approach to improve the accuracy of summarized incident report visualizations for cyber security. We extend a recent incident report summarization method by training a Bayesian hierarchical model to optimize the summarization algorithm's weights. We also train a flat model and a neural network as alternative models to compare against our hierarchical model. Summaries generated by our hierarchical model achieve higher accuracy than the other methods, with an AUC 0.2 higher than the unweighted method while achieving comparable summarization size. We further demonstrate that visualizations of the hierarchical model's summaries are at least as useful the unweighted method's summaries, and possibly more useful.",
      "show_abstract": false
    },
    {
      "authors": [
        "Aosheng Cheng (Zhejiang University of Finance and Economics)",
        "Yulong Yin (Zhejiang University of Finance and Economics)",
        "Zhenyu Yan (Zhejiang University of Finance and Economics)",
        "Yuhua Liu (Hangzhou Dianzi University)",
        "Zhiguang Zhou (Zhejiang University of Finance and Economics)"
      ],
      "Paper ID": 1029,
      "Title": "Visual Analytics of Multiple Network Ranking based on Structural Similarity ",
      "type": "Note",
      "Abstract": "Ranking the node importance in complex networks has been widely applied for different purposes, such as web search, resource allocation, and network security. However, existing node ranking methods are almost single network ranking using only one relationship, or aggregate the node ranking scores on multiple networks with equal\nweight, which are insufficient to construct reasonable multiple network rankings, since the association information among multiple networks is largely ignored. Thus, we propose a multiple network visualization framework by fusing multiple networks to obtain credible node ranking scores. After measuring the scores of nodes in each single network by the classic PageRank, a network weight self-adjustment model based on structural similarities between pairwise networks is designed to strengthen the common features of multiple networks or their distinct characteristics. Then, a combined score for each node is computed by a weighted sum of its individual ranking scores on multiple networks. Besides, we provide a set of visualization and interaction interfaces, enabling users to intuitively explore, optimize and compare the multiple network rankings. Case studies on real datasets show that our system is flexible to adapt to different application scenarios, and users can successfully solve multiple network ranking tasks efficiently.",
      "show_abstract": false
    }
  ],
  "Visual Data Storytelling Contest": [
    {
      "authors": [],
      "Paper ID": 1016,
      "Title": "[NO FINAL TITLE PROVIDED. ORIGINAL TITLE: Understanding Cultural Communication through the Visual Portraits of Youtube Channels]",
      "type": "Storytelling",
      "show_abstract": false
    },
    {
      "authors": [],
      "Paper ID": 1019,
      "Title": "[NO FINAL TITLE PROVIDED. ORIGINAL TITLE: Qu Xing\uff1aEmergency Logistics Constructing a Lifeline in Wuhan]",
      "type": "Storytelling",
      "show_abstract": false
    },
    {
      "authors": [],
      "Paper ID": 1021,
      "Title": "[NO FINAL TITLE PROVIDED. ORIGINAL TITLE: Polydodo: a Tool for Personal Sleep Stage Analysis and Narrative Visualization]",
      "type": "Storytelling",
      "show_abstract": false
    },
    {
      "authors": [],
      "Paper ID": 1024,
      "Title": "[NO FINAL TITLE PROVIDED. ORIGINAL TITLE: The Story of Slow Train in China]",
      "type": "Storytelling",
      "show_abstract": false
    }
  ]
};
