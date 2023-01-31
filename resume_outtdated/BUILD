# load("@bazel_skylib//rules:run_binary.bzl", "run_binary")
load("@bazel_latex//:latex.bzl", "latex_document")
load("@aspect_bazel_lib//lib:copy_file.bzl", "copy_file")

# run_binary(
#   name = "aa",
#   outs = ["resume.tex"],
#   args = ["-f resume.json -w -o resume.tex resume.ejs"],
#   tool = "/usr/bin/ejs",
# )

# filegroup(
#     name = "data",
#     srcs = ["resume.json"],
# )

load("@aspect_bazel_lib//lib:copy_to_bin.bzl", "copy_to_bin")
load("@aspect_bazel_lib//lib:directory_path.bzl", "directory_path")
load("@aspect_rules_js//js:defs.bzl", "js_binary", "js_run_binary", "js_test")
load("@aspect_bazel_lib//lib:diff_test.bzl", "diff_test")
load("@bazel_skylib//rules:write_file.bzl", "write_file")
load("@npm//:defs.bzl", "npm_link_all_packages")

# Link all direct dependencies in /examples/npm_deps/package.json to
# bazel-bin/examples/npm_deps/node_modules
npm_link_all_packages(name = "node_modules")

js_binary(
    name = "ejs",
    data = [
      # "resume.json",
      # "resume.ejs",
      "//:node_modules/ejs"
    ],
    # Reference the location where the acorn npm module was linked in the root Bazel package
    entry_point = "bin/index.js",
)

# A simple program that runs the Acorn JS parser to produce an AST
js_run_binary(
    name = "tex",
    srcs = [
      "resume.json",
      "resume.ejs"
      ],
    chdir = package_name(),
    outs = ["resume.tex"],
    # chdir = package_name(),
    # Request that the rules_js launcher prints extra information
    tool = ":ejs",
    # Uncomment the setting below to see debug output even on a
    # successful run of the build action.
    # silent_on_success = False,
)


# genrule(
#     name = "tex",
#     srcs = [
#       "resume.json",
#       "resume.ejs"
#     ],
#     outs = ["resume.tex"],
#     # cmd = "ejs -f $(location resume.json) -w $(location resume.ejs) -o abc",
#     cmd = "ejs -f $(location resume.json) -w $(location resume.ejs) > $@",
#     # tools = ["create_foo.pl"],
# )

# genrule(
#   name = "resume",
#   srcs = glob([
#         "*.tex",
#         "*.bib",
#         "*.sty",        
#     ]) + [":tex"],
#   outs = ["resume.pdf"],
#   cmd = "pdflatex $(location :tex)"
# )

latex_document(
    name = "pdf",
    srcs = glob([
        "*.tex",
        "*.bib",
        "*.sty",
    ]) + [
        # Other requirements.
    ],
    # main = "resume.tex",
    main = ":tex",
)



copy_file(
    # Name of the rule.
    name = "resume",
    # A Label
    src = ":pdf",
    # Path of the output file, relative to this package.
    out = "resume_yang_2023.pdf",
)