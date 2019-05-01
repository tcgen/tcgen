#pragma once

#include <map>

#include "tcframe/runner/logger.hpp"
#include "tcframe/runner/verdict.hpp"
#include "tcframe/util.hpp"

using std::map;

namespace tcframe {

class GraderLogger : public virtual BaseLogger {
public:
    virtual ~GraderLogger() = default;

    virtual void logIntroduction(const string& solutionCommand) = 0;
    virtual void logTestCaseVerdict(const TestCaseVerdict& verdict) = 0;
    virtual void logResult(const map<int, TestCaseVerdict>& subtaskVerdicts, const TestCaseVerdict& verdict) = 0;
};

}
