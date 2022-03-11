---
title: Data submission
toc: false
menu:
    top_nav:
        weight: 40
        pre: <i class="fas fa-paper-plane mr-2"></i>
        post: highlight
    main:
        identifier: submit_data
        parent: support_services
        weight: 50
        pre: <i class="fas fa-paper-plane"></i>
---

Publish your COVID-19 research data to make it available to the rest of the scientific community. The data must be stored in a public repository with descriptive metadata. For many types of biological data, there are international databases that can be considered _de facto_ standards.

### Data submission

[ELIXIR Estonia](https://elixir.ut.ee/) (elixir@ut.ee) consults where and how to share data in a public database. Do not hesitate to contact us if you have any questions. Your research group does not have to be affiliated with any specific institution to receive our help, we are available to help all the Estonian researchers.

European Bioinformatics Institute (EBI) has a number of different international data repositories that could be used, if necessary. Additional information is available on the [COVID-19 Data Portal Data Submission Page](https://covid19dataportal.ee/ee/support_services/submit/). For data types for which there is no suitable international repository or your data is related to personal data that should be stored in a secure environment, we cooperate with the [University of Tartu High Performance Computing Center](https://hpc.ut.ee/) and we will find a suitable solution according to your needs.

Here are our data submission guidelines for each specific data type:

* ##### Genomic and transcriptomic data

    Raw virus data (sequences) as well as collected and annotated genomes would be submitted to the [ENA database](https://www.ebi.ac.uk/ena). [Documentation](https://ena-browser-docs.readthedocs.io/en/latest/help_and_guides/sars-cov-2-submissions.html) provides instructions on how to upload SARS-CoV-2 data. Be sure to remove human-specific readings before submitting raw data (such as _Shotgun sequencing_).

    The host (human) sequences need to be implemented with limited access, as these are different types of personal data. [ELIXIR Estonia](https://elixir.ut.ee/) (elixir@ut.ee) allows you to store this data securely in cooperation with the [University of Tartu High Performance Computing Conter](https://hpc.ut.ee/). However, it should be considered that the data must be stored and analyzed in a secure environment before being uploaded to a suitable repository. ELIXIR Estonia can also help with this. For personal data and sensitive personal data, it is recommended to upload the metadata to a suitable repository with information on who and how can access the data. In addition, it is recommended to add a permanent identifier (e.g., DOI) to your dataset, which can be used if the database reference is required (e.g., in an article).

    * [The European Nucleotide Archive (ENA)](https://www.ebi.ac.uk/ena)
    * [ENA SARS-CoV-2 data submission documentation](https://ena-browser-docs.readthedocs.io/en/latest/help_and_guides/sars-cov-2-submissions.html)

    ***

* ##### Proteomics data

    To find a curated list of suitable proteomics repositories, it is recommended to consult the [FAIRsharing database](https://fairsharing.org/) using the query '[proteoomics](https://fairsharing.org/search/?q=proteomics&content=biodbcore&name=&taxonomies=&organisations = & shortname = & description = & supportlinks = & licenses = & countries = & maintainers = & expanded_onto_domains = & expanded_onto_disciplines = & user_defined_tags = & record_id = & miriam_id = & search_state = hidden)'.

    We recommend using the [PRIDE](https://www.ebi.ac.uk/pride/) repository, created by the [ProteomeXchange](http://www.proteomexchange.org/) consortium. The repository receives protein and peptide identification/quantification data along with accompanying mass spectrometry data, as well as other related data types. Data is uploaded via the [PRIDE Data Upload Tool](https://www.ebi.ac.uk/pride/markdownpage/pridesubmissiontool).

    Other types of proteomics data should also be made available. In order for the data to be usable and ready for analysis and integration, a detailed description of the data format and variables should be included. Each protein variable should come with a unique identifier, such as UniProt ID or ENGS ID (it should also describe which version of the data was used to link/match the data).

    * [PRIDE data repository](https://www.ebi.ac.uk/pride/) ja [PRIDE data submission tool](https://www.ebi.ac.uk/pride/markdownpage/pridesubmissiontool)

    ***

* ##### Imaging data

    Depending on the type of imaging data, it is recommended to use thematic repositories. To do so, please consult the [BioImage Archive](https://www.ebi.ac.uk/bioimage-archive/) recommendations table.

    * [BioImage Archive](https://www.ebi.ac.uk/bioimage-archive/)

    ***

* ##### Biochemistry data

    For biochemistry data, we recommend that users submit data to the [ChEMBL](https://www.ebi.ac.uk/chembl/) database, which is a manually curated database for bioactive molecules run by EMBL-EBI. It combines chemical data with bioactivity and genomic data to effectively develop new drugs.

    * [ChEMBL](https://www.ebi.ac.uk/chembl/)

    ***

* ##### Health data

    In the case of personal data or sensitive personal data, it is not recommended to keep them in public data repositories according to the data protection law. In this case, we recommend that you contact [ELIXIR Estonia](https://elixir.ut.ee/) (elixir@ut.ee) and we will find a suitable solution for you.

    * [ELIXIR Estonia](https://elixir.ut.ee/) (elixir@ut.ee)

    ***

### Supporting data management planning

[ELIXIR Estonia](https://elixir.ut.ee/) (elixir@ut.ee) supports you with data management planning at the beginning of the project to make data sharing more efficient through [personal consultations](elixir@ut.ee) in the field of creating data management plans.
We can also help you identify suitable repositories and international standards for describing and publishing your data. In addition, we offer assistance with the data upload process.

* [Submit a request for data management consultation from ELIXIR Estonia](https://elixir.ut.ee/) (elixir@ut.ee)

###### Data storage in public repositories

By storing data in a public repositories, you agree that the data will be published and may be used and shared in accordance with specific conditions set by the uploader or repository. The inclusion of data in public repositories is considered important, so data sharing can provide recognition and citations. The publication of the data is accompanied by a unique permanent identifier (e.g., DOI), which is often required for the publication of an article in a journal. Data sharing is also often required by funders.

If necessary, the data can often be published with an embargo period, which means that the data will not be published before the date you set.

_Please note that personal data needs more special treatment than there is a desire to make it public._

###### Data storage at the university

There are currently no rules or requirements for data storage in Estonia. The general recommendation is to ensure the long-term storage of the data produced, either in a university-related or field-specific data repository. If you wish, please contact [ELIXIR Estonia](https://elixir.ut.ee/) (elixir@ut.ee), who will help you find a suitable solution.
